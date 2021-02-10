import React, { Component } from 'react';

class User extends Component {
   state = {
      avatar: null,
      name: null,
      location: null,
   };

   componentDidMount() {
      this.getUserData(this.props.match.params.userId);
   }

   componentDidUpdate(prevProps) {
      const currUser = this.props.match.params.userId;
      if (prevProps.match.params.userId !== currUser) {
         this.getUserData(currUser);
      }
   }

   getUserData = userId => {
      fetch(`https://api.github.com/users/${userId}`)
         .then(res => res.json())
         .then(userData => {
            const { avatar_url, name, location } = userData;
            this.setState({
               avatar: avatar_url,
               name: name,
               location: location,
            });
         });
   };

   render() {
      const { avatar, name, location } = this.state;

      return (
         <div className="user">
            <img alt="User Avatar" src={avatar} className="user__avatar" />
            <div className="user__info">
               <span className="user__name">{name}</span>
               <span className="user__location">{location}</span>
            </div>
         </div>
      );
   }
}

export default User;

// const [userData, setUserData] = useState(null);

// useEffect(() => {
//    fetch(`https://api.github.com/users/${match.params.userId}`)
//       .then(res => {
//          if (res.ok) return res.json();

//          throw new Error();
//       })
//       .then(userData => setUserData(userData));
// }, [match.params.userId]);

// if (!userData) return null;

// const { name, location, avatar_url } = userData;
