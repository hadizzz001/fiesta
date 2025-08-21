"use client"

import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import {sendEmail} from '../api/sendEmail/sendEmail'

 

 


export default function Home() { 
      const router = useRouter(); 
      const [inputs, setInputs] = useState({});
      const [active, setActive] = useState(false) 
      const [value, setValue] = useState(''); 
  
       
  
      const handleChange = (e: any) => { 
          if(e.target.name == "phone"){ 
              const numericValue = e.target.value.replace(/[^0-9]/g, ''); 
              setValue(numericValue);
          }
  
          const name = e.target.name;
          const value = e.target.value;
          setInputs((prevState) => ({ ...prevState, [name]: value}));
      };
   
  


  return (
    <>


      <div className="mt-10">
        <div className="container-xl">
          <br />
          <h4 className="myGray mytitle2" style={{textAlign:"center"}}>GET IN TOUCH</h4>

        </div>
      </div>
      <div className="container-xl mt-5">
        <div>
          <div className="pl-5 pt-4 pr-5"> 
            <form action={async formData => { await sendEmail(formData); }}>
 
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <input
                        className="form-control myBord"
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                        required
                      />
                    </div> 
                  </div>

                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control myBord"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control myBord"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row pt-2">
                    <div className="col-sm-12">
                      <input
                        className="form-control myBord"
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        value={value} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <textarea
                        className="form-control form-control-text-area myBord"
                        name="message"
                        placeholder="Message"
                        rows={9}
                        required
                        onChange={handleChange}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                 
              </div>
              <div className="form-group row pt-2">
              <div className="col-md-5"></div>
                <div className="col-md-2">
          <button
            type="submit"
            className="w-full py-3 rounded-full font-bold uppercase text-lg"
            style={{ backgroundColor: "#c12288", color: "#fff" }}
          >
            Contact Us Now!
          </button>
                </div>
                <div className="col-md-5"></div>
              </div>
              <br />
            </form>
          </div>
        </div>
        
      </div>
      <div className="clearfix" />
      
    </>

  )
}
