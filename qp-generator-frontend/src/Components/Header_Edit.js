import React,{useContext} from 'react'
import { HeaderContext } from './HeaderProvider'
import InputElement from './InputElement'

function Header_Edit() {
    const [state,setState,college,setCollege]=useContext(HeaderContext);
    return (
        <div>
            <table>
            <tbody>
             <tr><td><InputElement _multiline placeholder="College Name" name="college"  width="550px" /></td></tr>
             <tr><td><InputElement placeholder="Subject Name" name="subject" value={state.subject} width="550px" /></td></tr>
             <tr><td><InputElement placeholder="Branch & degree" name="degree" value={state.degree} width="550px" /></td></tr>
             </tbody></table>
             <table><tbody>
             <tr><td><InputElement placeholder="Semester" width="150px" name="sem" value={state.sem} /></td>
             <td><InputElement placeholder="Subject Code" width="130px" name="code" value={state.code} /></td>
             <td><InputElement placeholder="DD/MM/YYYY" datepicker="true" width="130px" name="date" value={state.date} /></td>
             <td><InputElement placeholder="Marks" width="90px" name="marks" value={state.marks} /></td></tr>
             </tbody></table>
        </div>
    )
}

export default Header_Edit
