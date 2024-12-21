
import NavBar from "@/components/NavBar"
import Blogcard from "@/components/BlogCard";
import Feautures from "@/components/Feautures";
import Mega from "@/components/Mega";
import Commentsection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";

export default function Home(){
  return (
    <div>
      
    <NavBar/>
    <AuthorCard/>
    <Mega/>
    <Commentsection/>
    <Blogcard/>
    <Feautures/>


    </div>
  );
}
