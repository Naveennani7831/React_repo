 
 const Listitems =() => {
    const iplTeams= [
      {
        NameofTeam:"RCB",
        Namesofplayers:["VIRAT","Dinesh","SIRAJ","ABD"] 

      },
      {
        NameofTeam:"CSK",
        NamesofPlayers :["Dhoni","shivam","jedeja"]
      },
      {
        NameofTeam :"MI",
        Nameofplayers : ["Rohit","surya","pandiya","bumrah"]
      }

    ]
    return(
        <center>
      <div>
        {iplTeams.map((eachteam)=>{
            return (
              <div>
                <h1>{eachteam.NameofTeam}</h1>
                {/* {
                eachteam.Nameofplayers.map((eachplayer)=>{
                  return(
                    <>
                    <h3>{eachplayer}</h3>
                    </>
                  )
                })
                } */}
              </div>
            )
        })}
      </div>
      </center>
    )
 }
 export default Listitems;