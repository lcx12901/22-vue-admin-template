import { Schema, model } from 'mongoose'
const feld={
    name: String,
    age: Number,
    //人物标签
    labels:Number
}
const router = require('koa-router')()
const User = require('../db/models/user')
//自动添加更新时间创建时间:
let personSchema = new Schema(feld, {timestamps: {createdAt: 'created', updatedAt: 'updated'}})
export default model('User',personSchema)


router.prefix('/users')

router.get('/add', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router