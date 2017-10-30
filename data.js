// var data=[
//     {
//         id: 1,
//         name: '花花市',
//         parent_id: 0
//     },
//     {
//         id: 2,
//         name: '背背市',
//         parent_id: 0
//     },
//     {
//         id: 3,
//         name: '花花县',
//         parent_id: 1,
//     },
//     {
//         id: 4,
//         name: '花一县',
//         parent_id: 1,
//     },
//     {
//         id: 5,
//         name: '花二县',
//         parent_id: 1,
//     },
//     {
//         id: 6,
//         name: '背背县',
//         parent_id: 2,
//     },
//     {
//         id: 7,
//         name: '背一县',
//         parent_id: 2,
//     },
//     {
//         id: 8,
//         name: '背二县',
//         parent_id: 2,
//     },
//     {
//         id: 9,
//         name: '花村',
//         parent_id: 3,
//     },
//     {
//         id: 10,
//         name: '发村',
//         parent_id: 3,
//     },
//     {
//         id: 11,
//         name: '哈村',
//         parent_id: 3,
//     },
//     {
//         id: 12,
//         name: '背背村',
//         parent_id: 6,
//     },
//     {
//         id: 13,
//         name: '佩佩村',
//         parent_id: 6,
//     },
//     {
//         id: 14,
//         name: '嘿嘿村',
//         parent_id: 6,
//     },
// ];
// //  选中页面的元素
// var wrapper = document.querySelector('#wrapper');
// render();
// function render(parent_id, children_l) {
//     //第一遍执行  没有parent_id  第二遍就有了  如果没有就返回
//
//     if(children_l){
//           children_l.innerHTML='';
//     }
//
//     if(parent_id===''){
//         return;
//     }
//     // 如果没传parrent_id  设置 parent_id=0  为父集
//     //parent_id = parseInt(parent_id) || 0;
//     if(parent_id){
//         parent_id=parseInt(parent_id);
//     }else{
//         parent_id=0;
//     }
//
//     //找到 为parent_id  为父集的元素
//     // 第一遍 为0  所以parent_id=0  为腹肌
//
//      var list= data.filter(function (item) {
//         // if(parent_id===item.parent_id){
//         //     return true;
//         // }
//          return parent_id === item.parent_id;
//     });
//      if(!list.length){
//          return;
//      }
//     var el=document.createElement('span');
//     el.innerHTML=`
//         <select> </select>
//
//         <span class="children"> </span>
//     `;
//     //  选中 下拉菜单 和 span 标签
//
//     var select=el.querySelector('select');
//     var children=el.querySelector('.children');
//
//     //设置默认的东西
//     var a_option=document.createElement('option');
//     a_option.innerText='-请选择-';
//     a_option.value='';
//      select.appendChild(a_option);
//
//      //把拿出来的腹肌  发在里面
//
//     list.forEach(function (item) {
//         var option=document.createElement('option');
//         option.innerHTML=item.name;
//         option.value=item.id;
//         select.appendChild(option);
//     });
//
//     if(!parent_id){
//         document.querySelector('#wrapper').appendChild(el);
//     }else{
//         if(children_l){
//             children_l.appendChild(el);
//         }
//
//     }
//
//     select.addEventListener('change',function () {
//         render(this.value ,children)
//     })
//
//
//
//
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
