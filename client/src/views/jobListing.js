import React, { Component } from 'react';

// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useUserContext } from '../contexts/UserContext';
import { api } from '../utils/api';

import 'materialize-css';

import Loading from '../components/Loading';
import { useAuth0 } from '../react-auth0-spa';

// const Profile = () => {
//   const { loading, user } = useAuth0();
//   const [state, dispatch] = useUserContext();
  
// //   state = {
// //       jobs : []
// //   } 

//   useEffect(() => {
//     if (loading || !user) {
//       return <Loading />;
//     }

//     api.getUserInfo(user.email).then(result => {
//       if (result.success) {
//         dispatch({ type: 'user', payload: result.data });
//       } else {
//         api.addUserInfo(user).then(result => {
//           if (result.success) {
//             dispatch({ type: 'user', payload: result.data });
//           }
//         });
//       }
//     });
//   }, [loading, user, dispatch]);

// api.getJobListing().then(results => {

//     console.log(state);
//     let newState = { ...this.state };
//     newState.push(results);
//     console.log(newState);
//     // this.setState({
//     //   jobs: results.data.results,
//     // });
//   });

//   return (
//     <div className='row'>
//       <div className='center col s12 m6'>
//         <img
//           src={user.picture}
//           alt='User Profile'
//           className='circle responsive-img'
//           id='userImage'
//         />
//         <h3>USERNAME</h3>
//         <div className='card-panel grey'>{user.name}</div>
//       </div>

//       <div className='center col s12 m6'>
//         <h3>Job Listing</h3>

        
//       </div>
//     </div>
//   );
// };


export default class jobListing extends React.Component {
    
    state = {
        jobs : []
    } 
    
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     error: null,
    //     isLoaded: false,
    //     items: []
    //   };
    // }
  
    componentDidMount() {

    api.getJobListing().then(results => {

        // console.log(results);
        // let newState = { ...this.state };
        // newState.push(results);
        // console.log(newState);

        this.setState({
            isLoaded: true,
            jobs: results.data.results,
        });
        console.log(results);

        })
    }
  
    render() {
      const { error, isLoaded, jobs } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div><Loading /></div>;
      } else {
        return (
          <ul>
            {jobs.map(item => (
              <li key={item.title}>
              </li>
            ))}
          </ul>
            
        );
      }
    }
  }

// export default Profile;
