/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { FC, useCallback, useMemo, useRef, useState } from "react";

import useStore from "lib/store";
import { Observer, observer } from "mobx-react";
import { Menu } from "./menu";
import { useTranslation } from "react-i18next";
import {
  ServerIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import CollapsIcon from "./collapsIcon";

const iconClassName = "h-5 w-5 text-gray-300";

const style: Record<string, string | Record<string, string>> = {
  mobilePosition: {
    left: "left-0 ",
    right: "right-0 md:left-0",
  },
  close: `duration-700 ease-out hidden transition-all`,
  default: `flex flex-col absolute z-40 top-0 md:static md:flex md:left-auto md:top-auto h-screen  shrink-0 bg-slate-800 p-4`,
  open: `duration-200 ease-in transition-all`,
  collapsed: `md:w-16 w-16 p-2`,
  expanded: `md:w-[250px] w-64 overflow-y-scroll md:overflow-y-auto no-scrollbar md:translate-x-0 transform transition-all duration-200 ease-in-out translate-x-0`,
};
const Sidebar: FC<{ mobilePosition: string }> = ({ mobilePosition }) => {
  const { t } = useTranslation();
  const sidebar = useRef(null);
  const router = useRouter();
  const pathname = router.asPath;
  const store = useStore();
  const [isCollapsible, setIsCollapsible] = useState(false);

  const toggleCollapse = useCallback(() => {
    store.toggleCollapseMenu();
  }, [store]);

  const onMouseEnter = () => {
    setIsCollapsible(true);
  };

  const onMouseOver = () => {
    setIsCollapsible(false);
  };

  const signOut = useCallback(async () => {
    await store.signOut();
    router.push("/");
  }, [store, router]);

  const menuList = useMemo(
    () => (
      <Observer>
        {() => (
          <>
            {/* Links */}
            <div className="space-y-8">
              <ul className="mt-3">
                <Menu
                  href="/clients/"
                  pathname={pathname}
                  label={t("breadcrumb.clent", "Client")}
                  collapsed={store.menu.collapsed}
                  display={store.isRoleOfficer || store.isRoleAdmin}
                  icon={<ServerIcon className={iconClassName} />}
                />
              </ul>
            </div>
            <div className="flex-grow"></div>
            <div className="divide-y-2 divide-gray-600 mb-16">
              <ul className="mt-3">
                <Menu
                  href="/logout/"
                  pathname={pathname}
                  label={t("breadcrumb.logout", "Logout")}
                  collapsed={store.menu.collapsed}
                  icon={<ArrowLeftOnRectangleIcon className={iconClassName} />}
                  onClick={e => {
                    e.preventDefault();
                    signOut();
                  }}
                />
              </ul>
            </div>
          </>
        )}
      </Observer>
    ),
    [store, pathname, t, signOut]
  );
  return (
    <div>
      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`${style.default} ${
          (style.mobilePosition as Record<string, string>)[mobilePosition]
        }
        ${store.menu.open ? style.open : style.close} ${
          store.menu.collapsed ? style.collapsed : style.expanded
        }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseOver}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2 relative">
          {isCollapsible && (
            <button
              className={`p-2 rounded bg-light-lighter absolute -right-2 top-4" ${
                store.menu.collapsed ? "rotate-180" : ""
              } `}
              onClick={toggleCollapse}
            >
              <CollapsIcon />
            </button>
          )}
          <div className="flex w-full items-center justify-center sticky mt-8 top-0 z-10">
            {store.menu.collapsed ? (
              <img
                src="/logo_collapse.png"
                width={40}
                height={40}
                alt="Onehealt toolkit logo"
              />
            ) : (
              <img src="/logo.png" width={120} alt="Onehealt toolkit logo" />
            )}
          </div>
        </div>

        {menuList}
      </div>
    </div>
  );
};

export default observer(Sidebar);
