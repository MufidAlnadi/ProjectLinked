"use client";

import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useSession } from "next-auth/react";
import MenuItem from "./MenuItem";
import usePostModal from "@/app/hooks/usePostModal";
import { BsThreeDotsVertical } from "react-icons/Bs";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const postModal = usePostModal();
  const { data: session } = useSession();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handlePostProjectClick = () => {
    if (session?.user) {
      postModal.onOpen();
    } else {
      loginModal.onOpen();
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-4 px-3">
        <div
          onClick={handlePostProjectClick}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            bg-blue-500
            hover:bg-neutral-100 
            transition 
            text-white
            hover:text-black
            cursor-pointer
          "
        >
          Post a Project
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <BsThreeDotsVertical size={24} />
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {session && session.user ? (
              <>
                <MenuItem
                  label="Applications"
                  // accepted applications
                  onClick={() => router.push("/")}
                />
                <MenuItem
                  label="My Projects"
                  onClick={() => router.push("/myProjects")}
                />
                <MenuItem label="Post a Project" onClick={postModal.onOpen} />
                <hr />
                <div
                  className=" px-4 
                            py-3 
                            hover:bg-red-400 
                            transition
                            font-semibold"
                  onClick={() => signOut()}
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sign up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
