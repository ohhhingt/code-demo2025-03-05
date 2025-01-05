import { h, ref } from 'vue'  
import DefaultTheme from 'vitepress/theme'  
import './style.css'  

/** @type {import('vitepress').Theme} */  
export default {  
  extends: DefaultTheme,  
  Layout: () => {  
    const isAuthenticated = ref(false)  
    const userPassword = ref('')  
    const correctPassword = '00000000' // 设置你的密码  

    const checkPassword = () => {  
      if (userPassword.value === correctPassword) {  
        isAuthenticated.value = true  
      } else {  
        alert('密码错误，请重试。')  
      }  
    }  

    return () => {  
      return h(DefaultTheme.Layout, null, {  
        default: () => isAuthenticated.value ? null : h('div', { class: 'password-container' }, [  
          h('h2', '请输入密码'),  
          h('input', {  
            type: 'password',  
            value: userPassword.value,  
            onInput: (e) => userPassword.value = e.target.value,  
          }),  
          h('button', { onClick: checkPassword }, '提交'),  
        ])  
      })  
    }  
  },  
  enhanceApp({ app, router, siteData }) {  
    // ...  
  }  
}