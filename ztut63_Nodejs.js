const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>using Media Queries CSS Grid</title>
      <style>
  
          .container{
              display: grid;
              grid-gap: 1rem;
              grid-template-areas:
              'nav nav nav nav'
              'sec sec sec aside'
              'foot foot foot foot' ;
          }
          #nav{
              grid-area: nav;
          }
          #sec{
              grid-area: sec;
          }
          #aside{
              grid-area: aside;
          }
          #foot{
              grid-area: foot;
          }
          @media only screen and (max-width:300px){
             body{
              background-color: red;
             }
             .container{
              grid-template-areas:
              'nav nav nav nav'
              'sec sec sec sec'
              'foot foot foot foot' ;
             }
             /* suppose i want to dont show more about use(aside) in small display then  */
             aside{
              display: none;
             }
          }
          @media only screen and (min-width:300px)and (max-width:500px){
              body{
              background-color: yellow;
             }
          }
          @media only screen and (min-width:500px)and (max-width:800px){
              body{
              background-color:green;
             }
          }
          @media only screen and (min-width:800px){
              body{
              background-color: brown;
             }
          } 
          .text{
              background-color: aqua;
              color: black;
              padding: 10px;
              border: 2px solid black;
          }  
          footer{
              text-align: center;
          } 
             
          #nav li{
               list-style: none;
               float: left;
               margin: 10px 10px;
               padding: 4px 5px;
               font-size: larger;
               
               
          }
          #nav li a{
              color: black;
              text-decoration: none;
              
             
          }
          #nav{
              height: 3rem;                     
          }
        
      </style>
  </head>
  <body>
      <div class="container">
          <nav class="text" id="nav">
             <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Contact</a></li>
             </ul>
  
          </nav>
          <section class="text" id="sec">
           <h2>Learn CSS in hindi</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, harum aspernatur cumque fugit quos expedita? Quisquam soluta nulla accusantium minima sint debitis, qui voluptas rerum perferendis eius neque porro, eligendi ipsam nostrum ullam minus earum molestiae exercitationem quos quas voluptatem iusto esse tempore illo. Quidem, cumque labore. Nesciunt veniam autem ut. Culpa provident dolorem ea obcaecati nulla eum iure molestias placeat, ab, ipsa eaque distinctio. Placeat id tempora porro animi corrupti laudantium qui consequuntur, unde modi quos nisi cumque hic iusto dolores earum incidunt vel non? A debitis harum error officia, itaque accusamus. Magni molestiae, sit nemo esse inventore delectus provident sunt ipsam aut aperiam quaerat veritatis cupiditate quasi error? Ipsa non laboriosam libero odio, rem facere, consequatur quos vero sunt necessitatibus praesentium iure aliquid eum. Nihil dignissimos a impedit labore consequatur dicta magni quisquam, illo facilis harum. Quo architecto cupiditate autem, amet maxime optio ut et repellat modi iusto facere possimus minus a doloribus ratione vel qui incidunt aperiam repudiandae omnis eius cum nihil accusamus? Molestias dolor est blanditiis, quos eligendi nisi, repudiandae optio earum cum obcaecati delectus harum ipsam. Aliquid obcaecati vel alias eaque corporis doloribus error repellendus sint perferendis officiis, suscipit, quibusdam, odio aut repudiandae natus reiciendis?</p>
          </section>
          <aside class="text" id="aside">
              <h1>More about us</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium praesentium possimus illum nam, est debitis ea illo voluptas. Sunt, recusandae!</p>
          </aside>
          <footer class="text" id="foot">
              Here i complete HTML and CSSS
          </footer>
      </div>
      
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});