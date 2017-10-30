var data=[
    {
        name:'吉林',
        id:1,
        parent_id:0,
    },
    {
        name:'辽宁',
        id:2,
        parent_id:0,
    },
    {
        name:'黑龙江',
        id:3,
        parent_id:0,
    },
    {
        name:'长春' ,
        id:4,
        parent_id:1,
    },
    {
        name:'四平' ,
        id:5,
        parent_id:1,
    },
    {
        name:'白城' ,
        id:6,
        parent_id:1,
    },
    {
        name:'昌图' ,
        id:7,
        parent_id:2,
    },
    {
        name:'大连' ,
        id:8,
        parent_id:2,
    },
    {
        name:'瓦房店' ,
        id:9,
        parent_id:2,
    },
    {
        name:'齐齐哈尔' ,
        id:10,
        parent_id:3,
    },
    {
        name:'哈尔滨' ,
        id:11,
        parent_id:3,
    },
    {
        name:'龙江' ,
        id:12,
        parent_id:3,
    },
];

//首先选中页面的p标签我们 要把我们做好的加到里面去
var wrapper=document.getElementById('wrapper');
render();
function render(parent_id,children_1) {

    //判断有没有children_1 有的 清空的值 让他初始化
    if(children_1){
        children_1.innerHTML='';
    }
    //判断有没有parent_id 如果没有继续执行 有的话判断的是不是空字符串
    if(parent_id===''){
        return;
    }
    // 我们要先找出第一个级 渲染出来  因为都有parent_id  所以我们还要先定义一个腹肌
    //定义腹肌
    //因为第一次遍历没有 parent_id  所以腹肌就是为0 的对象
    parent_id=parseInt(parent_id)  || 0;
    //找出所有腹肌元素  用filter  因为他返回的是 所有符合条件的对象 组成的数组 用别的要多些一些代码 但是也可以实现
    var list=data.filter(function (item) {
        return  item.parent_id===parent_id;
    })
    //找到所有腹肌组成的数组  还要判断一下  判断这个数组是否有长度  如果没有长度就 结束
    if(!list.length){
        return;
    }

    //找到腹肌之后 还要渲染到页面上 因为每次点击 都会出来一个 继续选择的
    // 因为渲染出来继续选择哪个还是和以前的在同一行所以在定义一个span标签    这样我们一起定义两个
    var el=document.createElement('span');
    el.innerHTML=`
       <select></select>
       <span class="children"></span>
    `;
    // 选中我们定义好的  因为我们后面还要 把option 加到里面去 因为每个select 都有option
    // 还有就是不要忘记给option 赋值 他们每个都有值得
    var select=el.querySelector('select');
    var children=el.querySelector('.children');

    //这回我们开始设置默认的选项  每一个都有一个叫 请选择 的默认选项来提示我们去选择 所以我们开始设置
    var a_option=document.createElement('option');
    a_option.innerHTML='-请选择-';
    a_option.value='';
    select.appendChild(a_option);

    //现在我们开始遍历 我们找到的腹肌  把他们都加进去
    list.forEach(function (item) {
        var option=document.createElement('option');
        option.innerHTML=item.name;
        option.value=item.id;
        select.appendChild(option);
    });

    //判断是否有 传入的参数 parent_id  如果没有 代表第一次执行 我们把值赋给 页面的p标签
    if(!parent_id){
        wrapper.appendChild(el);
    }else{
        if(children_1){
            children_1.appendChild(el);
        }
    }

    select.addEventListener('change',function () {
        render(this.value,children);
    })
}




