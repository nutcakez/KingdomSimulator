let buildingList={
    'water':{
        shipyard:{
            requirements:""
        }
    },
    'rock':{

    },
    'forest':{

    },
    'desert':{

    },
    'clay':{
        golemancer:{
            price:{
                wood:50,
                gold:10
            },
            requirements:""
        },
        pottery:{
            price:{
                wood:20,
                gold:10
            },
            requirements:""
        },
        golemAcademy:{
            price:{
                wood:100,
                gold:80
            },
            requirements:['golemancer']
        }

    }
}

export=buildingList