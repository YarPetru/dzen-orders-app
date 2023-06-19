import React from 'react';
import { HiCog } from 'react-icons/hi';

const UserProfile: React.FC = () => {
  return (
    <div className="relative mt-60 h-[100px]">
      <img
        src="https://avatars.mds.yandex.net/i?id=150e3ccfcc5d7d099bfe9a3b0c3ccf0a0536312d-8253063-images-thumbs&n=13"
        alt="avatar"
        className="rounded-full h-full"
      />
      <HiCog className="absolute -bottom-[6px] -right-[6px]" />
    </div>
  );
};

export default UserProfile;
