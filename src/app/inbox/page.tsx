import { ListItem } from "@/components/list-item";
import { SettingsNav } from "@/components/settingsnav";
import { Tabs } from "@/components/tabs";

export default function Inbox() {
  return (
    <div>
      <>
        {/* ABOVE TABS UI BUTTONS */}
        <SettingsNav />
        {/* TABS */}
        <Tabs />
        {/* TAB CONTENT */}
        <div className="flex flex-col">
          {Array(10)
            .fill("*")
            .map((_, idx) => (
              <ListItem
                key={idx}
                from="Sender"
                subject="Subject Title"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptates itaque, in molestiae dicta nemo veritatis quae quis architecto autem consectetur, esse eius quia, quibusdam ipsam. Laudantium quia doloribus iusto!"
              />
            ))}
        </div>
      </>
    </div>
  );
}
