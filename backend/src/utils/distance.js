const pos = req.body
    const latitude = pos.latitude
    const longitude = pos.longitude
    const timestamp = pos.timestamp
    const userName = pos.userName

    getHaversineDistance = (firstLocation, secondLocation) => {
        const earthRadius = 6371; // km 
    
        const diffLat = (secondLocation.lat-firstLocation.lat) * Math.PI / 180;  
        const diffLng = (secondLocation.lng-firstLocation.lng) * Math.PI / 180;  
    
        const arc = Math.cos(
                        firstLocation.lat * Math.PI / 180) * Math.cos(secondLocation.lat * Math.PI / 180) 
                        * Math.sin(diffLng/2) * Math.sin(diffLng/2)
                        + Math.sin(diffLat/2) * Math.sin(diffLat/2);
        const line = 2 * Math.atan2(Math.sqrt(arc), Math.sqrt(1-arc));
    
        const distance = earthRadius * line; 
    
        return distance;
    }
    
    const fixAsaNorte = { lat: -15.766885135172616, lng: -47.893689299159924 }
    const fixTaguatinga = { lat: -15.835763911519793, lng: -48.046152086774306 }
    //const movel = { lat: -15.768313720194861, lng: -47.89310896975611}    
    
    
    const movel = { lat: latitude, lng: longitude}
    
    
    

    const result1 = getHaversineDistance(fixAsaNorte, movel) 
    const result2 = getHaversineDistance(fixTaguatinga, movel) 

    

    if(result1 < 0.260){
        User.pontoAsaNorte(req.body)
        return res.json({ message: 1})
    }

    if(result2 < 0.120){
        User.pontoTaguatinga(req.body)
        return res.json({ message: 1})
    }
    


    console.log("Não foi possivel registar a presença")
    return res.json({ message: 0})