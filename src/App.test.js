import { render, screen,fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import Login from './login'
import {BrowserRouter} from "react-router-dom"
describe('test for login',()=>{
  it('testing login',async ()=>{

    render(<BrowserRouter><Login/></BrowserRouter>);
    fireEvent.change(screen.getByTestId("userid"),{target:{value:'sam@gmail.com'}})
    fireEvent.change(screen.getByTestId("password"),{target:{value:'sam123'}})
    fireEvent.click(screen.getByTestId('btn'))
  await waitFor(()=>expect(screen.getByTestId('msglbl').textContent).toBe("valid user"))      
  //expect(screen.getByTestId('msglbl').textContent).toBe("valid user")      

  })
})
