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
  innovation: ['./assets/egou-cart-code-result.png', '易购小车项目的代码、识别流程与成果展示', 'EGO CART / CODE & RESULT'],
  robotics: ['./assets/shopping-eye-weighing-system.jpg', '购物慧眼无人称重计价系统现场测试', 'SHOPPING EYE / WEIGHING TEST'],
  som: ['./assets/som-cluster-map.png', '电力用户样本分布图作为 SOM 分析证据', 'SOM / DATA TRACE'],
  computer: ['./assets/certificates/computer-certificate.jpg', '计算机设计大赛证书作为成果记录', 'COMPUTER DESIGN / AWARD'],
  electronic: ['./assets/electronic-c/architecture.png', '基于 OpenMV 与 STM32 的单目视觉测量系统架构图', 'ELECTRONICS DESIGN / SYSTEM ARCHITECTURE', [
    ['./assets/electronic-c/schematic.png', 'STM32、OLED 与 OpenMV 硬件原理图', 'HARDWARE / SCHEMATIC'],
    ['./assets/electronic-c/stm32-flow.png', 'STM32 程序流程图', 'FIRMWARE / FLOW'],
    ['./assets/electronic-c/test-circle.png', '圆形目标测量结果截图', 'TEST / CIRCLE'],
    ['./assets/electronic-c/test-triangle.png', '三角形目标测量结果截图', 'TEST / TRIANGLE']
  ]],
  pcb: ['./assets/pcb-training/pcb-completed-board.jpg', '完成绘制的 PCB 作为培训成果证据', 'PCB TRAINING / COMPLETED BOARD', [
    ['./assets/pcb-training/pcb-routing.png', 'PCB 布线操作', 'ROUTING'],
    ['./assets/pcb-training/pcb-drc-check.png', 'PCB DRC 规则检查', 'DRC CHECK'],
    ['./assets/pcb-training/pcb-design-flow.jpg', 'PCB 设计流程', 'DESIGN FLOW']
  ]]
};

const projectDetails = {
  innovation: `<div class="drawer-detail"><h3>项目切入点</h3><p>围绕购物场景，把移动底盘、传感器和基础运动控制组合成可演示的自主移动小车原型。</p></div><div class="drawer-detail"><h3>我的交付</h3><div class="detail-grid"><div><strong>硬件搭建</strong><span>底盘、电源、传感器与执行机构连接</span></div><div><strong>程序联调</strong><span>采集状态判断、电机控制与整机联调</span></div><div><strong>现场验证</strong><span>完成装配、运行测试和故障排查</span></div><div><strong>过程材料</strong><span>保留真实硬件照片与项目说明记录</span></div></div></div>`,
  robotics: `<div class="drawer-detail"><h3>系统链路</h3><p>从商品称重数据采集开始，经识别与计价流程处理，最后在显示端反馈结果，形成无人购物场景下的设备端闭环。</p></div><div class="drawer-detail"><h3>我的交付</h3><div class="detail-grid"><div><strong>功能拆分</strong><span>梳理称重、识别、计价和显示之间的接口</span></div><div><strong>设备调试</strong><span>参与称重模块接入、硬件连接与现场联调</span></div><div><strong>流程整理</strong><span>记录数据从采集到结果反馈的处理路径</span></div><div><strong>成果归档</strong><span>整理项目材料与软件著作权相关证据</span></div></div></div>`,
  som: `<div class="drawer-detail"><h3>分析路径</h3><p>先整理 CSV / Excel 样本字段，再通过 SOM 自组织映射观察用户分布，最后结合异常标签和可视化结果形成分析记录。</p></div><div class="drawer-detail"><h3>我的交付</h3><div class="detail-grid"><div><strong>数据整理</strong><span>处理样本字段、格式和分析所需变量</span></div><div><strong>方法实现</strong><span>学习并应用 SOM 聚类与映射流程</span></div><div><strong>结果解释</strong><span>对异常用户、聚类分布和标签进行对照</span></div><div><strong>报告编写</strong><span>把数据处理、图表和结论整理成文档</span></div></div></div>`,
  computer: `<div class="drawer-detail"><h3>方案结构</h3><p>围绕电网设备通信、低功耗蓝牙采集和 5G 中继，梳理设备端、通信链路与上行数据之间的关系。</p></div><div class="drawer-detail"><h3>我的交付</h3><div class="detail-grid"><div><strong>资料研究</strong><span>理解 BLE 接入、5G 中继和电网数据采集</span></div><div><strong>架构梳理</strong><span>绘制并讲解系统流程与通信关系</span></div><div><strong>材料制作</strong><span>整理竞赛方案 PPT 和演示内容</span></div><div><strong>成果记录</strong><span>保留竞赛证书和方案文档作为项目边界</span></div></div></div>`,
  pcb: `<div class="drawer-detail"><h3>培训链路</h3><p>以一个可完成、可检查、可调试的硬件练习为主线，覆盖原理图理解、PCB Layout、焊接和通断测试。</p></div><div class="drawer-detail"><h3>我的交付</h3><div class="detail-grid"><div><strong>内容组织</strong><span>安排从原理图到实物调试的训练顺序</span></div><div><strong>设计讲解</strong><span>讲解封装、布线、规则检查和常见问题</span></div><div><strong>实践指导</strong><span>指导元件焊接、通断检查和基础测量</span></div><div><strong>问题排查</strong><span>使用万用表与示波器定位硬件故障</span></div></div></div>`,
  electronic: `<div class="drawer-detail"><h3>系统拆分</h3><div class="detail-grid"><div><strong>OpenMV H7 Plus</strong><span>图像采集、目标检测、特征提取</span></div><div><strong>STM32F103C8T6</strong><span>数据接收、二次计算、误差补偿与控制</span></div><div><strong>OV5640 / OLED</strong><span>500 万像素采集与测量结果显示</span></div><div><strong>UART / I2C</strong><span>OpenMV 以 115200bps 与主控通信，OLED 使用 I2C</span></div></div></div><div class="drawer-detail"><h3>测量原理</h3><p class="formula">D = (W_real × f) / W_pixel<br />x_real = (x_pixel / W_pixel) × W_real</p><p>通过已知尺寸标定相机焦距，再由目标在图像中的像素宽度换算距离和几何尺寸。</p></div><div class="drawer-detail"><h3>报告测试记录</h3><div class="test-table-wrap"><table class="test-table"><thead><tr><th>目标</th><th>真实距离</th><th>测量均值</th><th>距离误差</th><th>尺寸误差</th></tr></thead><tbody><tr><td>圆形</td><td>100.0 cm</td><td>101.2 cm</td><td>+1.2 cm</td><td>+0.3 cm</td></tr><tr><td>三角形</td><td>400.0 cm</td><td>401.8 cm</td><td>+1.8 cm</td><td>-0.4 cm</td></tr><tr><td>正方形</td><td>700.0 cm</td><td>698.5 cm</td><td>-1.5 cm</td><td>-0.1 cm</td></tr></tbody></table></div><p class="detail-source">数据来源：项目报告表 4.1；报告记录距离误差均在 5 cm 内、尺寸误差均在 2 cm 内。</p></div>`
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
  const [visualSrc, visualAlt, visualLabel, gallery = []] = projectVisuals[id];
  visual.innerHTML = `<img src="${visualSrc}" alt="${visualAlt}"><span class="mono">${visualLabel}</span>${gallery.length ? `<div class="drawer-gallery">${gallery.map(([src, alt, label]) => `<button type="button" data-gallery-src="${src}" data-gallery-alt="${alt}" data-gallery-label="${label}" aria-label="查看 ${label}"><img src="${src}" alt=""></button>`).join('')}</div>` : ''}`;
  visual.querySelectorAll('[data-gallery-src]').forEach(button => button.addEventListener('click', () => {
    const mainImage = visual.querySelector('img');
    mainImage.src = button.dataset.gallerySrc;
    mainImage.alt = button.dataset.galleryAlt;
    visual.querySelector('span').textContent = button.dataset.galleryLabel;
  }));
  drawer.querySelector('[data-drawer-role]').textContent = project.role;
  drawer.querySelector('[data-drawer-features]').innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
  drawer.querySelector('[data-drawer-tags]').innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
  drawer.querySelector('[data-drawer-evidence]').textContent = `证据状态：${project.evidence}。项目成果：${project.result}。`;
  const detail = drawer.querySelector('[data-drawer-detail]');
  detail.innerHTML = projectDetails[id] || '';
  detail.hidden = !projectDetails[id];
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
