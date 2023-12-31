import Head from "next/head";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Moment from "react-moment";

export default function PromptCard({ index, $id, uid, tag, prompt, username, timestamp, handleTagClick, deletePrompt }) {
  const [copied, setCopied] = useState("");
  const pathName = usePathname();
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  const handleShareButtonClick = () => {
    const promptText = `${prompt}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(promptText)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=300');
  };
  return (
    <><Head>
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </Head><article className="flex max-w-xl flex-col items-start justify-between bg-white rounded-lg shadow-md border border-gray-200 p-4">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-x-4 text-xs">
            <Moment fromNow className="text-gray-500 font-medium">{timestamp}</Moment>
            <p onClick={(e) => { handleTagClick(tag); }} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 cursor-pointer">{tag}</p>
          </div>
          <div onClick={handleCopy} className="w-10 h-10 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer">
            <img
              src={copied === prompt
                ? "/tick.svg"
                : "/copy.svg"}
              alt={copied === prompt ? "tick_icon" : "copy_icon"}
              width={18}
              height={18} />
          </div>
        </div>
        <p className="mt-5 line-clamp-3 text-sm font-medium leading-6 text-gray-700">{prompt}</p>
        <Link href={`/profile/${username}?uid=${uid}`} className="relative mt-8 flex items-center gap-x-4">
          <div className="text-sm font-medium leading-6">
            <p className="text-gray-700">{username}</p>
          </div>
        </Link>
        <button onClick={handleShareButtonClick}>Share on Twitter</button>
        {pathName === "/my-profile" && (
          <div className='mt-5 justify-between flex gap-4'>
            <Link href={`/update-prompt?id=${$id}`}
              className='text-sm bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent cursor-pointer'
            >
              Edit
            </Link>
            <button onClick={() => { deletePrompt($id); }}
              className='text-sm  bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent cursor-pointer'
            >
              Delete
            </button>
          </div>
        )}
      </article></>
  )
}
