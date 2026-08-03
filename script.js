const projectDetails = {
  'smart-shopping-cart': {
    type: '国家级大学生创新训练项目 · 2024—2025',
    title: '易购小车 / 购物随行小伴侣',
    role: '负责人 / 程序编写',
    summary: '项目申报书围绕 STM32、OpenMV、UWB、传感器和显示交互展开，目标包含商品识别、称重计价、自动跟随与避障。',
    workflow: ['硬件模块与传感器方案梳理', '嵌入式程序编写与接口联调', '围绕商品识别、称重和跟随能力整理系统方案'],
    tags: ['STM32', 'OpenMV', 'UWB', '嵌入式程序'],
    evidence: '原始申报书确认本人分工为程序编写；方案内容不等同于商业化交付。',
  },
  'monocular-measurement': {
    type: '中国大学生电子设计大赛 · C题 · 2025',
    title: '单目视觉目标物测量装置',
    role: '视觉处理、主控通信与显示联调',
    summary: 'OpenMV 负责图像采集、目标识别和特征提取，STM32 负责数据解析、标定计算、OLED 显示与系统控制。',
    workflow: ['自适应阈值、ROI 和形状识别', 'UART 定长数据包接收与解析', '标定参数计算距离和尺寸并刷新 OLED'],
    tags: ['OpenMV H7 Plus', 'STM32F103C8T6', 'Python / C', 'UART / OLED'],
    evidence: '设计报告记录距离平均误差 1.2—2.1 cm、边长平均误差 0.3—0.4 cm；数字来源为报告测试结果。',
  },
  'smart-weighing': {
    type: '中国机器人及人工智能大赛项目',
    title: '购物慧眼 / 智慧无人称重计价系统',
    role: '项目团队成员',
    summary: '从卷积神经网络训练到 OpenMV 部署，再通过串口把视觉结果送入单片机，结合电子秤和 ADC 完成显示、计价与语音播报链路。',
    workflow: ['建立并训练商品图像识别模型', '将模型导入 OpenMV 摄像头芯片', '融合视觉结果与重量数据完成计价交互'],
    tags: ['OpenMV', 'CNN', 'STM32', 'ADC / UART'],
    evidence: '项目研究报告、查新报告和展示 PPT 已确认系统方案；未将团队材料扩写为个人独立完成。',
  },
  'smart-grid-sensor': {
    type: '国家级大学生创新训练项目方案',
    title: 'BLE / 5G 中继智慧电网传感器',
    role: '项目团队成员',
    summary: '方案围绕 TMR 电流与波形采集、低功耗 BLE 传输、5G 中继和智慧化展示系统展开，关注采集、通信与故障定位的组合设计。',
    workflow: ['TMR 传感器采集电流与波形', 'BLE 低功耗传输与 5G 中继', '故障定位算法与状态可视化展示'],
    tags: ['BLE', '5G 中继', 'TMR', 'IoT'],
    evidence: '6 μA、体积和量程来自方案 PPT，均标记为方案材料指标，不作为个人实测结果。',
  },
  'som-anomaly-detection': {
    type: '通信课程设计 · SOM',
    title: '用电异常用户监测',
    role: '课程设计研究与实现',
    summary: '课程设计使用 20×20 神经元网格与 5 维用电特征，通过归一化、学习率与邻域衰减、重构误差和 95% 分位数阈值完成异常监测方案。',
    workflow: ['读取用户 ID、用电特征和标签', '将特征归一化到 [0,1] 区间', '基于重构误差和动态阈值输出异常用户'],
    tags: ['SOM', '20×20 grid', '5 features', '1000 samples'],
    evidence: '数据文件包含用户 ID 和样本字段；原始数据不上传，网页只展示算法结构和数据规模。',
  },
};

const drawer = document.querySelector('[data-project-drawer]');
const toast = document.querySelector('[data-toast]');

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2400);
}

function closeDrawer() {
  drawer?.classList.remove('is-open');
  drawer?.setAttribute('aria-hidden', 'true');
}

function openProject(slug) {
  const project = projectDetails[slug];
  if (!project || !drawer) return;
  drawer.querySelector('[data-drawer-type]').textContent = project.type;
  drawer.querySelector('[data-drawer-title]').textContent = project.title;
  drawer.querySelector('[data-drawer-role]').textContent = `我的角色：${project.role}`;
  drawer.querySelector('[data-drawer-summary]').textContent = project.summary;
  drawer.querySelector('[data-drawer-workflow]').innerHTML = project.workflow.map((item) => `<li>${item}</li>`).join('');
  drawer.querySelector('[data-drawer-tags]').innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join('');
  drawer.querySelector('[data-drawer-evidence]').textContent = project.evidence;
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  drawer.querySelector('.drawer-close')?.focus();
}

document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-row').forEach((project) => {
      const categories = project.dataset.category.split(' ');
      project.hidden = filter !== 'all' && !categories.includes(filter);
    });
  });
});

document.querySelectorAll('[data-slug]').forEach((project) => {
  const activate = () => openProject(project.dataset.slug);
  project.addEventListener('click', activate);
  project.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activate();
    }
  });
});

document.querySelectorAll('[data-drawer-close]').forEach((button) => button.addEventListener('click', closeDrawer));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeDrawer();
});

document.querySelector('[data-contact-form]')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const payload = Object.fromEntries(new FormData(form));
  const subject = encodeURIComponent(`来自作品集网站的联系：${payload.name}`);
  const body = encodeURIComponent(`姓名：${payload.name}\n邮箱：${payload.email}\n\n${payload.message}`);
  window.location.href = `mailto:lizhangboyao@outlook.com?subject=${subject}&body=${body}`;
  form.querySelector('[data-form-status]').textContent = '已准备好邮件，请在邮箱客户端中完成发送。';
});
