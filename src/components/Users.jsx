import React, { useCallback } from 'react'
import { useUsers } from '../hooks/useUsers';
import '../App.css';
import { debounce } from 'lodash';


function Users() {

  const handler = useCallback(debounce((text) => handleSearch(text), 1000), []);
  const { users: { listUsers }, handleSearch } = useUsers();

  function renderRow(item) {
    const { last_name = "", first_name = "", email = "", id = 0, avatar = '' } = item;
    return (
      <tr key={id}>
        {avatar && (<td>
          <img src={avatar} height="100" width="100" />
        </td>)}

        <td>{`${first_name} ${last_name}`}</td>
        <td>{email}</td>
      </tr>
    )
  }


  return (
    <div style={style.mainConatiner}>
      <div className='mt-5 mb-5 ml-1' style={style.headerContainer}>
        <h1 style={{ flexGrow: 1 }}>
          List Users
        </h1>

        <input style={style.input} className='form-control'
          placeholder='Seach By Name' type="text" 
          onChange={(event) => handler(event.target.value)} />

      </div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>
              Avatar
            </th>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
          </tr>
        </thead>

        <tbody>
          {listUsers.map((item) => (
            renderRow(item)
          ))}
        </tbody>
      </table>
    </div>
  )
}

const style = {
  mainConatiner: {
    paddingLeft: '10%', paddingRight: '10%'
  },
  headerContainer: {
    display: 'flex', flexDirection: 'row'
  },
  input: {
    width: '20%'
  }
}

export default Users;