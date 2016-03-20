import Vue from 'vue';
import Router from 'vue-router';
import App from './components/app.vue';
import worksView from './components/worksView.vue';

Vue.use(Router);//使用插件

var router=new Router();//实例化

//路由规则
router.map({
	'/':{
		component:worksView
	}
});

router.start(App,'#app');//启用路由
