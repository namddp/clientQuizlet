import React from "react";
import Account from "@/components/SettingsFrofile/AccountType";
import AvatarSettings from "@/components/SettingsFrofile/Avatar";
import ChangeEmail from "@/components/SettingsFrofile/ChangeEmail";
import DeleteAccount from "@/components/SettingsFrofile/DeleteAccount";

export default function Settings() {

  return (
    <main className="min-h-screen bg-[#0a092d]">
      <div className="h-full">
        <Account />
        <AvatarSettings />
        <ChangeEmail />
        <DeleteAccount />
      </div>
    </main>
  );
}
