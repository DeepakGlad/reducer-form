import { useReducer } from 'react'

import './App.css'

function App() {


  const reducer =(state,action)=>{
    switch(action.type){
      case 'username':
      return {...state,username:action.payload}

      case 'email':
        return {...state,email:action.payload}

        case 'firstname':
          return {...state,firstname:action.payload}

          case 'lastname':
            return {...state,lastname:action.payload}

            case 'submit':
              return {submit:action.payload}
    }
  }

  const [state, dispach] = useReducer(reducer,{
    username: "",
    email: "",
    firstname:"",
    lastname:"",
  });

  const handlechange = (event)=>{
    dispach({type:'username',payload:event.target.value})
  }

  const handlechangeemail = (event)=>{
    dispach({type:'email',payload:event.target.value})
  }


  const handlechangefirstname = (event)=>{
    dispach({type:'firstname',payload:event.target.value})
  }

  const handlechangelastname = (event)=>{
    dispach({type:'lastname',payload:event.target.value})
  }

  const onClickHandle = (event)=>{
    event.preventDefault();
    dispach({type:"submit",payload:state})
    console.log("submit")
  }

  return (
    <>
      <div>
        <form>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-4">
          <label for="username" class="block text-sm/6 font-medium text-gray-900">Username</label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            
              <input type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="janesmith" value={state.username} onChange={handlechange} />
            </div>
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm/6 font-medium text-gray-900">email</label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            
              <input type="email" name="email" id="email" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="email" value={state.email} onChange={handlechangeemail} />
            </div>
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="firstname" class="block text-sm/6 font-medium text-gray-900">firstname</label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            
              <input type="text" name="firstname" id="firstname" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="janesmith"  value={state.firstname} onChange={handlechangefirstname} />
            </div>
          </div>
        </div>


        <div class="sm:col-span-4">
          <label for="lastname" class="block text-sm/6 font-medium text-gray-900">lastname</label>
          <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            
              <input type="text" name="lastname" id="lastname" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="janesmith"value={state.lastname} onChange={handlechangelastname} />
            </div>
          </div>
        </div>

        </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" class="text-sm/6 font-semibold text-gray-900" >Reset</button>
              <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={onClickHandle}>Save</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
