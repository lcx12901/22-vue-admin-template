<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="transition-box">
        <el-card shadow="hover">
          <h3>{{ schoolCount }}</h3>
          <h1 style="width:100%;">学校总数</h1>
        </el-card>
      </div>
      <div class="transition-box">
        <el-card shadow="hover">
          <h3>{{ academyCount }}</h3>
          <h1 style="width:100%;">学院总数</h1>
        </el-card>
      </div>
      <div class="transition-box">
        <el-card shadow="hover">
          <h3>{{ classsCount }}</h3>
          <h1 style="width:100%;">班级总数</h1>
        </el-card>
      </div>
      <div class="transition-box">
        <el-card shadow="hover">
          <h3>{{ studentCount }}</h3>
          <h1 style="width:100%;">学生总数</h1>
        </el-card>
      </div>
      <div class="transition-box">
        <el-card shadow="hover">
          <h3>{{ teacherCount }}</h3>
          <h1 style="width:100%;">教师总数</h1>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      academy: '',
      academyCount: '',
      classs: '',
      classsCount: '',
      school: '',
      schoolCount: '',
      student: '',
      studentCount: '',
      teacher: '',
      teacherCount: ''
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() {
    this.$http.post('/api/school/get').then(res => {
      this.school = res
      this.schoolCount = this.school.length
      console.log(res)
    })
    this.$http.post('/api/academy/get').then(res => {
      this.academy = res
      this.academyCount = this.academy.length
      console.log(res)
    })
    this.$http.post('/api/classs/get').then(res => {
      this.classs = res
      this.classsCount = this.classs.length
      console.log(res)
    })
    this.$http.post('/api/student/get').then(res => {
      this.student = res
      this.studentCount = this.student.length
      console.log(res)
    })
    this.$http.post('/api/teacher/get').then(res => {
      this.teacher = res
      this.teacherCount = this.teacher.length
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
