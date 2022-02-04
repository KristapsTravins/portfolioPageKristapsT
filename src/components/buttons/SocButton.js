
const SocButton =(props)=> {
  return (
    <div className="soc_btn">
        <div className="inner_soc"> 
            {props.icon}
            <p>{props.name}</p>
        </div>
    </div>
  );
}

export default SocButton;
