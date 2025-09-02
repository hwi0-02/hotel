<template>
    <div>
        <h2>좌석 예약</h2>
        <input v-model="userName" placeholder="이름 입력" />
        <input v-model="seatNo" placeholder="좌석 번호 입력" />
        <button @click="reserve">예약</button>

        <h3>예약 현황</h3>
        <ul>
            <li v-for="r in reservations" :key="r.id">
                {{ r.seatNo }} - {{ r.userName }}
            </li>
        </ul>
    </div>
 </template>

<script>
//cd frontend && npm install axios
 import axios from "axios";

 export default{
    data(){
        return {
            userName: "",
            seatNo: "",
            reservations: []
        };
    },
    created(){
        this.fetchReservations();
        this.subscribeSSE();
    },
    methods: {
        async fetchReservations(){
          const res = await axios.get("http://localhost:8888/api/reservations");
          //const res = await axios.get("/api/reservations");
          this.reservations = res.data;
        },
    async reserve(){
        try{
            //http://localhost:8888/api/reservations?userName=this.userName&seatNo=this.seatNo
            const res = await axios.post("http://localhost:8888/api/reservations",{
          //const res = await axios.get("/api/reservations", {
          userName:this.userName,
          seatNo:this.seatNo
        });
        this.reservations.push(res.data);
    } catch(err){
        alert(err.response.data);
    }
    },
    subscribeSSE(){
        const eventSource
        = new EventSource("http://localhost:8888/api/reservations");
        //const eventSource = new EventSource("api/reservations/subscribe");
        eventSource.addEventListener("reservation", event =>{
            const data = JSON.parse(event.data);
            this.reservations.push(data);
        });
    }
 }
 }
</script>