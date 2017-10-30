// var data=[
//     {
//         name:'吉林',
//         id:1,
//         parent_id:0,
//     },
//     {
//         name:'辽宁',
//         id:2,
//         parent_id:0,
//     },
//     {
//         name:'黑龙江',
//         id:3,
//         parent_id:0,
//     },
//     {
//       name:'长春' ,
//         id:4,
//         parent_id:1,
//     },
//     {
//         name:'四平' ,
//         id:5,
//         parent_id:1,
//     },
//     {
//         name:'白城' ,
//         id:6,
//         parent_id:1,
//     },
//     {
//         name:'昌图' ,
//         id:7,
//         parent_id:2,
//     },
//     {
//         name:'大连' ,
//         id:8,
//         parent_id:2,
//     },
//     {
//         name:'瓦房店' ,
//         id:9,
//         parent_id:2,
//     },
//     {
//         name:'齐齐哈尔' ,
//         id:10,
//         parent_id:3,
//     },
//     {
//         name:'哈尔滨' ,
//         id:11,
//         parent_id:3,
//     },
//     {
//         name:'龙江' ,
//         id:12,
//         parent_id:3,
//     },
// ];
//
// var wrapper=document.getElementById('wrapper');
// render();
// function render(parent_id,children_1) {
//     if(children_1){
//         children_1.innerHTML='';
//     }
//     if(parent_id===''){
//         return;
//     }
//     //首先我要把他的腹肌便利出来
//     //因为他们都有parent_id 所以我要定义一个腹肌的id
//     //第一遍遍历的时候0  就是腹肌ID
//     parent_id=parseInt(parent_id) || 0;
//
//     //开始便利出以0为腹肌的对象
//     //这里为什么用 filter  一因为用他返回的是一个复合条件的对象  组成的数组  用其他也可以只不过稍微多写几行代码
//     var list =data.filter(function (item) {
//         return item.parent_id===parent_id;
//     });
//
//     if(!list.length){
//         return;
//     }
//     // 腹肌找到了  这回我们把页面上的初始值定义一下 因为刚开始出来一个下拉菜单  但是点击里面一个值得时候还想出来一个下拉菜单  所以我们要一起定义两个
//     var el=document.createElement('span');
//     el.innerHTML=`
//        <select></select>
//        <span class="children"></span>
//     `;
//
//       //这回选中上面创建的标签  为了一会向里面添加东西
//     var select=el.querySelector('select');
//     var children=el.querySelector('.children');
//
//     //定义一个 叫请选择 的option  因为每个这种 选项都会有这样的一个提示  所以要写一个
//     //首先创建一个 option  在吧里面加入  文字  请选择  最后加到select中  记住一定要赋值 value
//     var a_option=document.createElement('option');
//     a_option.innerHTML='-请选择-';
//     a_option.value='';
//     select.appendChild(a_option);
//
//     //这回我们把遍历出来的腹肌 组 放进去
//
//     list.forEach(function (item) {
//         var option=document.createElement('option');
//         option.innerHTML=item.name;
//         option.value=item.id;
//         select.appendChild(option);
//     });
//
//
//     if(!parent_id){
//         wrapper.appendChild(el);
//     }else{
//         if(children_1){
//             children_1.appendChild(el);
//         }
//     }
//
//     select.addEventListener('change',function () {
//         render(this.value,children);
//     })
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
