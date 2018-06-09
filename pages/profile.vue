<template>
<main>
    <div class="card">
        <div>
        <h2>tignear</h2>
        </div>
        <img src="~/static/img/profile/myimg.jpg"/>
    </div>
    <div class="card intro">
        <div>
        scalaが好きだけどあまり深いとこまでいけてない。
        web系はあんまり得意ではない。
        特にデザインは全くできない。
        やったことあるのところはあんまり真面目に見てはいけない。
        呼ぶならtwitterで召喚するのが早い。
        </div>
        <div class="links">
        <a href="https://twitter.com/tignear"><i class="fab fa-twitter"/></a>
        <a href="https://github.com/tignear"><i class="fab fa-github"/></a>
        </div>
    </div>
    <div class="card">
        やった事あるプログラミング言語。
        <ul>
            <li>Scala</li>
            <li>Java</li>
            <li>Haskell</li>
            <li>C++</li>
            <li>ECMAScript</li>
            <li>Ruby</li>
        </ul>
    </div>
    <div class="card">
        興味のあるものたち。
        <ul>
            <li>統計</li>
            <li>解析</li>
            <li>数学</li>
            <li>暗号通貨の仕組み</li>
            <li>画像解析の仕組み</li>
            <li>DirectX12</li>
            <li>Vulkan</li>
            <li>VR</li>
        </ul>
    </div>
</main>
</template>
<script>
export default {
    head(){
        return {
            title:"プロフィール",
            meta: [
                {name:"twitter:card" ,content:"summary"}, 
                {name:"twitter:site", content:"@tignear"} ,
                { property:"og:url", content:"https://tignear.now.sh/profile" } ,
                { property:"og:title", content:"Tignearのプロフィール" }, 
                { property:"og:description" ,content:"scalaとかが好きな人" }, 
                { property:"og:image", content:"https://tignear.now.sh/img/profile/myimg.jpg" }
            ]
        }
    }
}
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
h2 {
  display: inline-block;
}
img {
  width: 100%;
  height: auto;
  border-radius: 100%;
}
main .card {
  border: 4px double #ddd;
  margin: 2em 0;
  padding: 2em;
  min-width: 300px;
  box-sizing: border-box;
  width: 25%;
}
.links a {
  margin: 1em;
  color: black;
}
.links a:visited {
  color: black;
}
.links {
  margin-top: 2em;
  text-align: center;
}
i {
  font-size: 300%;
}
</style>
