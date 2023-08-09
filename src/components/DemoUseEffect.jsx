// rfce
import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];
function DemoUseEffect() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  // useEffect xử lý các side-effect(là những hành động sự kiện thay đổi cây DOM)
  // Trên code thì được viết trước nhưng sẽ được xử lý sau khi render UI
  // userEffect nhận tham số thứ nhất là callback (hàm gọi lại- xử lý bất đồng bộ)
  //   useEffect(() => {
  //     console.log("Mounted");
  //     document.title = title; //(DOM)
  //   });
  //  Có thể để document.title=title ở ngoài useEffect nhưng không nên vì:
  //   - react là ưu tiên luồng chính là luồng render UI cho người dùng

  //   3 cách sử dụng useEffect()
  //   Trường hợp 1: useEffect(callback)
  //   Callback sẽ được gọi liên tục khi component re-render=> ảnh hướng xấu đến performance (hiệu năng)
  //   Trường hợp 2: useEffect(callback,[])
  //   Chỉ gọi callback 1 lần sau khi component được mount (render)
  //   Trường hợp 3: useEffect(callback,[deps]) - dependencies (phụ thuộc)
  //   Chỉ gọi callback khi mà giá trị phụ thuộc(deps) thay đổi
  //   Điểm chung: Callback luôn được gọi sau khi component được mounted

  //   Giới thiệu fetch API (là API để gửi và nhận request bằng js và sẽ trả về 1 promise)
  //   Callback là xử lý bất đồng bộ sinh ra callback hell
  //   Để xử lý callback hell thì sử dụng promise (lời hứa(đang chờ-đồng ý-từ chối) 2 .then và 1 .catch)
  //   Demo trường hợp 1
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.log(error));
  //   });

  //   Demo trường hợp 2:
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((data) => setPosts(data))
  //       .catch((error) => console.log(error));
  //   }, []);

  //   Demo trường hợp 3:
  //   useEffect(() => {
  //     console.log("Title Change");
  //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //       .then((response) => response.json())
  //       .then((data) => setPosts(data))
  //       .catch((error) => console.log(error));
  //   }, [type]);

  return (
    <div>
      {/* <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> */}
      {/* Demo TH2 */}
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      {/* Demo TH3 */}
      {/* {tabs.map((tab) => (
        <button key={tab} onClick={() => setType(tab)}>
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DemoUseEffect;
