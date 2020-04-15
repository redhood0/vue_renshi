<template>
	<div class="loginContainerDiv">
		<el-form
			class="loginContainer"
			:rules="rules"
			ref="loginFormRef"
			:model="loginForm"
			v-loading="loading"
			element-loading-text="少女吟唱中..."
		>
			<h3 class="loginTitle">系统登陆</h3>
			<el-form-item prop="username">
				<el-input
					size="normal"
					type="text"
					v-model="loginForm.username"
					auto-complete="off"
					prefix-icon="iconfont icon-renshibussiness-man-fill"
					placeholder="请输入用户名"
				></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input
					size="normal"
					type="password"
					v-model="loginForm.password"
					auto-complete="off"
					prefix-icon="iconfont icon-renshipassword"
					placeholder="请输入密码"
				></el-input>
			</el-form-item>
			<el-checkbox size="normal" class="loginRemember" v-model="checked"
				>记住密码</el-checkbox
			>
			<el-button type="primary" style="width: 100%;" @click="onSubmit"
				>登录</el-button
			>
		</el-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checked: true,
			loading: false,
			loginForm: {
				username: '',
				password: '',
				code: ''
			},
			rules: {
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' },
					{ min: 1, max: 10, message: '长度1~10字符', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 3, max: 15, message: '长度3~15字符', trigger: 'blur' }
				],
				code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
			}
		}
	},
	methods: {
		onSubmit() {
			this.$msg.success({ message: 'success.data.msg' })
			this.$refs.loginFormRef.validate(valid => {
				this.loading = true
				// if (valid) {
				// 	this.Message.success({message: "success.data.msg"})
				// 	//登录
				// 	this.postRequest('logingModel', '/abc', { par: 'pars' })
				// 	//成功弹出消息窗口

				// 	//取消loading
				// 	this.loading = false
				// 	//路由跳转
				// } else {
				// 	console.log('error submit!!')
				// 	this.loading = false
				// 	return false
				// }
			})
		}
	}
}
</script>

<style lang="less" scoped>
.loginContainer {
	border-radius: 15px;
	background-clip: padding-box;
	margin: 180px auto;
	width: 350px;
	padding: 15px 35px 35px 35px;
	background: #fff;
	border: 1px solid #eaeaea;
	box-shadow: 0 0 25px #cac6c6;

	.loginTitle {
		margin: 15px auto 20px auto;
		text-align: center;
		color: #505458;
	}

	.loginRemember {
		text-align: left;
		margin: 0px 0px 15px 0px;
	}
}
.loginContainerDiv {
	/deep/ .el-loading-text {
		font-size: 16px;
	}
	/deep/ .el-loading-mask {
		border-radius: 5px;
		background-color: rgba(255, 255, 255, 0.8) !important;
	}
}
</style>
