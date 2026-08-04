const projects = [
  {id:'innovation',type:'大创',title:'易购小车：购物随行小伴侣',summary:'面向购物场景的自主移动小车原型，完成硬件集成、传感器接入和基础运动控制验证。',role:'参与系统方案拆解、硬件搭建、传感器接入、嵌入式程序开发与整机联调。',features:['小车底盘与电源结构搭建','传感器数据采集与状态判断','电机驱动和基础运动控制','现场装配、测试与故障排查'],tags:['嵌入式','传感器','电机控制','原型验证'],evidence:'真实硬件照片、装配现场照片、项目说明文档',result:'完成原型硬件与基础功能验证'},
  {id:'robotics',type:'机器人大赛',title:'购物慧眼：智慧无人称重计价系统',summary:'面向无人购物场景的称重、识别与计价系统，关注设备端采集和流程联动。',role:'参与系统功能拆分、称重模块接入、数据流程设计、设备端调试与材料整理。',features:['称重数据采集与稳定读取','商品识别和计价流程联动','显示端结果反馈','硬件连接与现场调试'],tags:['称重','识别','嵌入式','系统联调'],evidence:'项目压缩包、原理图与软件著作权材料',result:'形成可演示的无人称重计价系统方案'},
  {id:'som',type:'SOM',title:'基于 SOM 的用电异常用户监测',summary:'使用自组织神经网络对电力用户样本进行聚类和异常监测，记录数据处理与分析过程。',role:'负责样本数据整理、SOM 方法学习、异常用户分析、结果可视化和报告编写。',features:['CSV / Excel 样本数据整理','SOM 自组织映射与聚类分析','异常用户识别与标签对比','分析过程与结果文档化'],tags:['SOM','Python','数据分析','异常监测'],evidence:'样本数据、分析报告、结果记录',result:'完成用电异常用户监测的分析验证'},
  {id:'computer',type:'计算机大赛',title:'低功耗蓝牙和 5G 中继的电网智慧化方案',summary:'围绕电网设备通信、低功耗采集和 5G 中继构建智慧化方案，完成方案论证与展示。',role:'参与通信架构理解、方案资料整理、系统流程梳理和竞赛展示材料制作。',features:['低功耗蓝牙设备接入','5G 中继通信链路设计','电网数据采集与上行','方案文档和演示材料整理'],tags:['BLE','5G','物联网','方案设计'],evidence:'竞赛方案 PPT、获奖证书',result:'获得计算机设计大赛相关竞赛成果'},
  {id:'electronic',type:'电子设计大赛',title:'2025 电赛 C 题：测量与控制原型',summary:'围绕电子设计竞赛题目完成电路搭建、传感器测量、控制逻辑和现场测试。',role:'参与电路方案设计、元件与模块连接、程序调试、测量验证和竞赛现场协作。',features:['测量模块与控制模块连接','传感器数据读取与处理','控制逻辑调试','现场测试与结果记录'],tags:['电路设计','STM32','测量','硬件调试'],evidence:'电赛项目压缩包、实物照片、获奖证书',result:'获得全国大学生电子设计竞赛四川赛区本科组三等奖'},
  {id:'pcb',type:'PCB 培训',title:'学院中规模 PCB 设计与硬件调试培训',summary:'在学院开展中规模 PCB 培训，覆盖从原理图、PCB Layout 到焊接和硬件调试的完整流程。',role:'参与培训内容组织、原理图与 PCB 设计讲解、焊接实践指导和调试问题排查。',features:['原理图阅读与绘制','PCB Layout 基础训练','元件焊接与通断检查','万用表与示波器调试实践'],tags:['KiCad','PCB','焊接','示波器'],evidence:'培训材料、PCB 培训压缩包、实践记录',result:'形成可复现的学院 PCB 实践培训流程'}
];

const list = document.querySelector('[data-project-list]');
const drawer = document.querySelector('[data-drawer]');
const lightbox = document.querySelector('[data-lightbox]');
const projectVisuals = {
  innovation: ['./assets/measurement-result.jpg', '易购小车原型与桌面测量现场', 'REAL HARDWARE / MEASUREMENT'],
  robotics: ['./assets/measurement-result.jpg', '硬件原型作为系统集成证据', 'SYSTEM INTEGRATION / HARDWARE'],
  som: ['./assets/som-cluster-map.png', '电力用户样本分布图作为 SOM 分析证据', 'SOM / DATA TRACE'],
  computer: ['./assets/certificates/computer-certificate.jpg', '计算机设计大赛证书作为成果记录', 'COMPUTER DESIGN / AWARD'],
  electronic: ['./assets/certificates/electronics-certificate.jpg', '电子设计竞赛证书作为成果记录', 'ELECTRONICS DESIGN / AWARD'],
  pcb: ['./assets/measurement-setup-cropped.jpg', '硬件装配现场作为 PCB 实践证据', 'PCB TRAINING / DEBUGGING']
};

function renderProjects(filter = 'all') {
  const filtered = filter === 'all' ? projects : projects.filter(project => project.id === filter);
  list.innerHTML = filtered.length ? filtered.map((project, index) => `
    <article class="project-row" data-project-id="${project.id}" tabindex="0" role="button" aria-label="查看 ${project.title} 项目详情">
      <span class="project-number">${String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
      <div class="project-name"><strong>${project.title}</strong><small>${project.summary}</small></div>
      <div class="project-cell"><span>${project.type}</span><span>${project.role.split('、').slice(0, 2).join('、')}</span></div>
      <div class="project-cell"><span>${project.tags.slice(0, 3).join(' / ')}</span><span>代码 · 文档 · 实物</span></div>
      <div class="project-result">${project.result}</div><span class="row-arrow" aria-hidden="true">→</span>
    </article>`).join('') : '<p class="empty-state">暂无此分类项目。</p>';
  list.querySelectorAll('[data-project-id]').forEach(row => {
    row.addEventListener('click', () => openDrawer(row.dataset.projectId));
    row.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openDrawer(row.dataset.projectId); } });
  });
}

function openDrawer(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  drawer.querySelector('[data-drawer-type]').textContent = `${project.type} / PROJECT FILE`;
  drawer.querySelector('[data-drawer-title]').textContent = project.title;
  drawer.querySelector('[data-drawer-summary]').textContent = project.summary;
  let visual = drawer.querySelector('.drawer-visual');
  if (!visual) {
    visual = document.createElement('div');
    visual.className = 'drawer-visual';
    visual.innerHTML = '<img alt=""><span class="mono"></span>';
    drawer.querySelector('[data-drawer-summary]').after(visual);
  }
  const [visualSrc, visualAlt, visualLabel] = projectVisuals[id];
  visual.querySelector('img').src = visualSrc;
  visual.querySelector('img').alt = visualAlt;
  visual.querySelector('span').textContent = visualLabel;
  drawer.querySelector('[data-drawer-role]').textContent = project.role;
  drawer.querySelector('[data-drawer-features]').innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
  drawer.querySelector('[data-drawer-tags]').innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
  drawer.querySelector('[data-drawer-evidence]').textContent = `证据状态：${project.evidence}。项目成果：${project.result}。`;
  drawer.classList.add('is-open'); drawer.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
}

function closeDrawer() { drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
function closeLightbox() { lightbox.classList.remove('is-open'); lightbox.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('is-active'));
  button.classList.add('is-active'); renderProjects(button.dataset.filter);
}));
document.querySelectorAll('[data-close-drawer]').forEach(element => element.addEventListener('click', closeDrawer));
document.querySelectorAll('[data-close-lightbox]').forEach(element => element.addEventListener('click', closeLightbox));
document.querySelectorAll('.evidence-photo img').forEach(image => image.addEventListener('click', () => {
  lightbox.querySelector('[data-lightbox-image]').src = image.src; lightbox.classList.add('is-open'); lightbox.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
}));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeDrawer(); closeLightbox(); } });
renderProjects();
