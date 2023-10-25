import "./Profile.css";

type ProfileProps = {
     message: 'matherfaca';
     contacts: 'myphone'

  };
  
  export const Profile: React.FC<ProfileProps> = (props) => (
    <div>Profile: {props.message}, {props.contacts}</div>
  );