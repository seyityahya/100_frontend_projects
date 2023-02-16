import React, { useEffect, useState} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function UsersDetail() {
    const { id } = useParams();
    const location = useLocation();
    const [user, setUser] = useState(location.state);

    useEffect(() => {
        if(!user?.id) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => res.json())
                .then((data) => setUser(data));
        }
    }, [id, user]);


  return (
    <div className='user-detail'>
        <h2>Kullanıcı Detayları</h2>

        {/* {user && <pre>{JSON.stringify(user, null, 2)}</pre>} */}
        <div>
            <ul>
                <li>
                  <h3>{user.id}. Kullanıcı</h3>
                </li>
                <li>
                    <h4>İsim : <span>{user.name}</span> </h4>
                </li>
                <li>
                    <h4>Email : <span>{user.email}</span> </h4>
                </li>
                <li>
                    <h4>ADRES : </h4>
                    <h5>Sokak : <span>{user.address.street}</span> </h5>
                    <h5>Apartman : <span>{user.address.suite}</span> </h5>
                    <h5>Şehir : <span>{user.address.city}</span> </h5>
                    <h5>Posta Kodu : <span>{user.address.zipcode}</span> </h5>
                </li>
                <li>
                    <h4>Websitesi : <span>{user.website}</span> </h4>
                </li>
                <li>
                    <h4>Telefon : <span>{user.phone}</span> </h4>
                </li>
                <li>
                    <h4>ŞİRKET : </h4>
                    <h5>İsmi : <span>{user.company.name}</span> </h5>
                    <h5>sloganı : <span>{user.company.catchPhrase}</span> </h5>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default UsersDetail