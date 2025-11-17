import {loadConfig} from './config-loader.js';import {loadData} from './data-loader.js';
(async()=>{const cfg=await loadConfig();const v=document.getElementById('player');v.src=cfg.video_url;
const data=await loadData(cfg.data_url);document.getElementById('data-output').textContent=JSON.stringify(data,null,2);})();