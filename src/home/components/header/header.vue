<template>
    <div class ='headerWarp'>
        <div class = 'header-left'>
             <span class = 'iconfont'>&#xe6e1;</span>
        </div>
        <div class = 'middleWarp'>
            <span class="search iconfont">&#xe627;</span>
            <div class = 'placeHolder'>这是背景</div>
            <input/>
        </div>
        <router-link  to = '/cityList' class = 'headerRightWarp'>
            {{this.$store.state.city}}       
            <span class="iconfont">&#xe629;</span>
        </router-link>
    </div>
</template>
<script>
export default{
    name: 'homeHeader',
    data(){
        return{
           city: "深圳s" 
        }
    },
}
</script>

<style lang = 'stylus' scoped>
   .headerWarp{
       display:flex;
       height:0.88rem;
       min-width:11rem;
       background-color: #00bcd4;
       
   }
   .header-left{
       width:0.8rem;
       height:0.88rem;
       line-height:0.88rem;
       text-align:center;
   }
   .header-left .iconfont{
       display: block;
       width:100%;
       height:100%;
       font-size: .5rem;
       color:#fff;
   }
   .headerRightWarp{
       position:relative;
       width:1.32rem;
       height:0.88rem;
       line-height :0.8rem;
       text-align :center;  
       color:#fff;
        font-size: .32rem; 
   }  /*
   .headerRightWarp .city{
       display:inline-block;
       width :100%;
       height:100%;
     
       position:absolute;
       top:0.3rem;
       left:0rem;
        
 }*/
   .headerRightWarp span{
          
        font-size: .36rem; 
   }

   .middleWarp{
       flex:1;
       position: relative;
       height:0.88rem;
       line-height :0.6rem;
       padding:0.1rem 0.2rem 0.1rem 0;
   }
   .middleWarp input{
       height:0.6rem;
       width:100%;
       text-indent:0.64rem;
       outline:none;
       border:none;
   }
   .middleWarp .search{
       position :absolute;
       top:0.12rem;
       left:0.2rem;
       color:#ccc;
   }
   .middleWarp .placeHolder{
       position :absolute;
       top:0.12rem;
       left:0.64rem;
       color:#ccc;
   } 
</style>