const defaultState = {
    inputValue : 'Write Something',
    list : [
        "faire pipi et caca",
        "recite english and french new words"
    ]
}
export default (state = defaultState,action)=>{

    //console.log(state, action)
    //Reducer 里只能接受state，不能改变state
    if (action.type === 'changeInput'){
          let newState = JSON.parse(JSON.stringify(state)) //深度拷贝
          //就是利用JSON.stringify 将js对象序列化（JSON字符串），再使用JSON.parse来反序列化(还原)js对象
          newState.inputValue=action.value
          return newState
    }

    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝
          //就是利用JSON.stringify 将js对象序列化（JSON字符串），再使用JSON.parse来反序列化(还原)js对象
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type === 'deleteItem'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝
          //就是利用JSON.stringify 将js对象序列化（JSON字符串），再使用JSON.parse来反序列化(还原)js对象
        newState.list.splice(action.index,1)
        return newState
    }

    return state
}