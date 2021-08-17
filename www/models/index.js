import pkg from "sequelize";
import cuid from "cuid";
const { DataTypes } = pkg;
const { STRING, DATE,TEXT, INTEGER,UUID,BOOLEAN, DATEONLY } = DataTypes;
const userInit = {
firstName:{defaultValue:"",type:STRING,},
middleName:{defaultValue:"",type:STRING,},
lastName:{defaultValue:"",type:STRING,},
email:{defaultValue:"",type:STRING,},
username:{defaultValue:"",type:STRING,},
isActive:{defaultValue:true,type:BOOLEAN,},
}
const profileInit = {
title: {  type: STRING,  },
slug: {  type: STRING, },
image: { type: STRING,  },
date_created: { type: STRING,  },
date_modified: { type: STRING,  },
is_public: { type: BOOLEAN,  },
is_active: { type: BOOLEAN,  },
mobile_number: {  type: STRING,  },
internal_notes: [],
addresses: [],
roles: [],
bio: { type: STRING, }, // match: /[a-z]/
}
const commentInit ={}
const messageInit ={
subject: {defaultValue:"",type:STRING,},
body:{defaultValue:"",type:STRING,}, 
signature:{defaultValue:false,type:BOOLEAN,},
replyTo: {defaultValue:"",type:STRING,},
wasRead: {defaultValue:false,type:BOOLEAN,},
wasSent: {defaultValue:false,type:BOOLEAN,},  
}
const addressInit = {
idempotent_key: { type: STRING, defaultValue: cuid},
address_type: { type: STRING, defaultValue:"", },
street1: { type: STRING, defaultValue:"", },
street2: { type: STRING, defaultValue:"", },
state: { type: STRING, defaultValue:"", },
city: { type: STRING, defaultValue:"", },
zipcode: { type: STRING, defaultValue:"", }, 
}


const noteInit = {
    tag:[],
    note: {
        type: TEXT,
      },
}
const postInit= {   }
const tutorialInit ={
    title: {
        type: STRING,
      },
      description: {
        type: STRING,
      },
      date_published: {
        type: DATE,
      },
      published: {
        type: BOOLEAN,
      },
}