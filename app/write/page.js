import styles from "./page.module.css";

export default function Write() {
  return (
    <div className={styles.writeWrap}>
      <h4>글작성</h4>
      <form action="api/post/new" method="POST">
        <input type="text" name="title" placeholder="글제목" />
        <textarea name="content" id="" cols="30" rows="10" placeholder="글내용"></textarea>
        <button>버튼</button>
      </form>
    </div>
  );
}
