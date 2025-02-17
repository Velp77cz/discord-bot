

  
export async function getStats(name) {
    try {
      let response = await fetch(`https://api.tracker.gg/api/v2/r6siege/standard/profile/ubi/${name}`, {
        method: "GET",
        headers: {
            headers: { "TRN-Api-Key": "e1203e83-84bc-4eb9-817e-7c10425d8bd5" }
          },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
  
      let jsonResponse = await response.json(); // Parse JSON response
      let statsData = jsonResponse.data; // Access "data" field
  
      //console.log("Extracted Data:", statsData);
  
      // Navigate to data -> segments -> 0 -> stats
      if (statsData.segments && statsData.segments.length > 0) {
        let stats = statsData.segments[1].stats;
        return stats;
      } else {
        console.log("No segments found.");
        return null;
      }
  
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  }





export function printStats(stats) {
    if (!stats) {
      return ["Error: No stats found."];
    }
  
    let fields = [];
    console.log(stats)
    for (let stat in stats){
        //console.log(stats[stat].displayName, stats[stat].value)
        fields.push({
            name: stats[stat].displayName,
            value: stats[stat].value,
            //inline: true
        })
    }
    return fields
  }
  

  let st = await getStats("Velp77");
  console.log(printStats(st))
  

