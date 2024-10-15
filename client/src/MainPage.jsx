/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  PlusCircle,
  Paintbrush,
  Zap,
  HelpCircle,
  ChevronLeft,
  RotateCcw,
  Eye,
  ChevronDown,
  Type,
  AlignLeft,
  Square,
  Minus,
  Image,
  Bookmark,
  Sparkles,
  Play,
  Share2,
  FileCheck,
  Code,
  Grid,
  ShoppingBag,
  Tag,
} from "lucide-react";

export default function Component() {
  const [activeTab, setActiveTab] = useState("content");
  const [activePanel, setActivePanel] = useState("content");
  const Heading = ({ content, onChange }) => (
    <h1>
      <input
        type="text"
        value={content}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Heading"
      />
    </h1>
  );

  const Paragraph = ({ content, onChange }) => (
    <p>
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paragraph"
      />
    </p>
  );

  const ButtonComponent = ({ content, onChange }) => (
    <button>
      <input
        type="text"
        value={content}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Button Text"
      />
    </button>
  );

  const Divider = () => <hr />;

  const Spacer = () => <div style={{ height: "20px" }} />;

  const ImageComponent = ({ content, onChange }) => (
    <div>
      <input
        type="text"
        value={content}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Image URL"
      />
      <img src={content} alt="Image" style={{ maxWidth: "100%" }} />
    </div>
  );

  // Define additional components similarly...

  const LogoComponent = ({ content, onChange }) => (
    <div>
      <input
        type="text"
        value={content}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Logo URL"
      />
      <img src={content} alt="Logo" style={{ maxWidth: "100%" }} />
    </div>
  );

  const VideoComponent = ({ content }) => <video controls src={content} />; // Expecting a video URL

  const SocialComponent = ({ content }) => <div>{content} Social Link</div>; // Placeholder for social links

  const SurveyComponent = ({ content }) => <div>{content} Survey</div>; // Placeholder for surveys

  const CodeComponent = ({ content }) => <code>{content}</code>; // Code element

  const AppsComponent = ({ content }) => <div>{content} Apps</div>; // Placeholder for apps

  const ProductComponent = ({ content }) => <div>{content} Product</div>; // Placeholder for products

  const ProductRecComponent = ({ content }) => (
    <div>{content} Recommended Product</div>
  ); // Placeholder for recommended products

  const CreativeAssistantComponent = ({ content }) => (
    <div>{content} Creative Assistant</div>
  ); // Placeholder for creative assistant

  const contentItems = [
    {
      name: "Heading",
      icon: <Type className="h-6 w-6" />,
      type: "h1",
      component: Heading,
    },
    {
      name: "Paragraph",
      icon: <AlignLeft className="h-6 w-6" />,
      type: "p",
      component: Paragraph,
    },
    {
      name: "Button",
      icon: <Square className="h-6 w-6" />,
      type: "button",
      component: ButtonComponent,
    },
    {
      name: "Divider",
      icon: <Minus className="h-6 w-6" />,
      type: "divider",
      component: Divider,
    },
    {
      name: "Spacer",
      icon: <Square className="h-6 w-6 stroke-1" />,
      type: "spacer",
      component: Spacer,
    },
    {
      name: "Image",
      icon: <Image className="h-6 w-6" />,
      type: "image",
      component: ImageComponent,
    },
    {
      name: "Logo",
      icon: <Bookmark className="h-6 w-6" />,
      type: "logo",
      component: LogoComponent,
    },
    {
      name: "Creative Assistant",
      icon: <Sparkles className="h-6 w-6" />,
      type: "creativeAssistant",
      component: CreativeAssistantComponent,
    },
    {
      name: "Video",
      icon: <Play className="h-6 w-6" />,
      type: "video",
      component: VideoComponent,
    },
    {
      name: "Social",
      icon: <Share2 className="h-6 w-6" />,
      type: "social",
      component: SocialComponent,
    },
    {
      name: "Survey",
      icon: <FileCheck className="h-6 w-6" />,
      type: "survey",
      component: SurveyComponent,
    },
    {
      name: "Code",
      icon: <Code className="h-6 w-6" />,
      type: "code",
      component: CodeComponent,
    },
    {
      name: "Apps",
      icon: <Grid className="h-6 w-6" />,
      type: "apps",
      component: AppsComponent,
    },
    {
      name: "Product",
      icon: <ShoppingBag className="h-6 w-6" />,
      type: "product",
      component: ProductComponent,
    },
    {
      name: "Product Rec",
      icon: <Tag className="h-6 w-6" />,
      type: "productRec",
      component: ProductRecComponent,
    },
  ];

  const blankLayouts = [
    { name: "1 Column", icon: "▭", columns: 1 },
    { name: "2 Columns (Left)", icon: "▯▭", columns: 2 },
    { name: "2 Columns (Right)", icon: "▭▯", columns: 2 },
    { name: "2 Columns (Top)", icon: " \n▭▭", columns: 2 },
    { name: "2 Columns (Bottom)", icon: "▭▭\n ", columns: 2 },
    { name: "3 Columns", icon: "▯▯▯", columns: 3 },
    { name: "4 Columns", icon: "▯▯▯▯", columns: 4 },
  ];

  const prebuiltLayouts = [
    { name: "Image & Text", icon: "▭≡" },
    { name: "Text & Text", icon: "≡≡" },
  ];

  const styleCategories = ["Email", "Text", "Link", "Button", "Divider"];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Navigation */}
      <div className="bg-white border-b px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="font-semibold">dfsfd</div>
          <Input placeholder="Help me design my email" className="w-64" />
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <RotateCcw className="h-4 w-4 mr-2" />
            Changes saved
          </Button>
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" size="sm">
            Send test
          </Button>
          <Button
            size="sm"
            className="bg-teal-600 text-white hover:bg-teal-700"
          >
            Save and exit
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-16 bg-white border-r flex flex-col items-center py-4 space-y-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setActivePanel("content")}
          >
            <PlusCircle className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActivePanel("styles")}
          >
            <Paintbrush className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon">
            <Zap className="h-6 w-6" />
          </Button>
          <div className="flex-grow" />
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-6 w-6" />
          </Button>
        </div>

        {/* Content/Styles Panel */}
        <div className="w-80 bg-white border-r flex flex-col overflow-hidden">
          {activePanel === "content" && (
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="w-full justify-start bg-white border-b">
                <TabsTrigger
                  value="content"
                  className="flex-1 min-w-[120px] data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-teal-600"
                >
                  Content
                </TabsTrigger>
                <TabsTrigger
                  value="layouts"
                  className="flex-1 min-w-[120px] data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-teal-600"
                >
                  Layouts
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="content"
                className="flex-1 p-4 overflow-hidden"
              >
                <div className="h-ful overflow-y-auto">
                  {" "}
                  {/* This div controls the scroll */}
                  <div className="grid grid-cols-2 gap-4">
                    {contentItems.map((item) => (
                      <Draggable key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="layouts" className="flex-1 p-4 overflow-auto">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Blank layouts
                    </h3>
                    <div className="grid grid-cols-2 gap-4  ">
                      {blankLayouts.map((layout) => (
                        <Card
                          key={layout.name}
                          className="p-4 flex flex-col items-center justify-center space-y-2 hover:bg-gray-50 cursor-pointer"
                        >
                          <div className="text-2xl">{layout.icon}</div>
                          <div className="text-sm">{layout.columns}</div>
                        </Card>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Prebuilt layouts
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {prebuiltLayouts.map((layout) => (
                        <Card
                          key={layout.name}
                          className="p-4 flex flex-col items-center justify-center space-y-2 hover:bg-gray-50 cursor-pointer"
                        >
                          <div className="text-2xl">{layout.icon}</div>
                          <div className="text-sm">{layout.name}</div>
                        </Card>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Using blank vs. prebuilt layouts
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          )}
          {activePanel === "styles" && (
            <div className="flex flex-col h-full">
              <Tabs defaultValue="desktop" className="w-full">
                <TabsList className="w-full justify-start bg-white border-b">
                  <TabsTrigger
                    value="desktop"
                    className="flex-1 min-w-[120px] data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-teal-600"
                  >
                    Desktop
                  </TabsTrigger>
                  <TabsTrigger
                    value="mobile"
                    className="flex-1 min-w-[120px] data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-teal-600"
                  >
                    Mobile
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex-1 overflow-auto">
                <Accordion type="single" collapsible className="w-full">
                  {styleCategories.map((category) => (
                    <AccordionItem value={category} key={category}>
                      <AccordionTrigger className="px-4 py-2 hover:bg-gray-50">
                        {category}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="p-4 text-sm text-gray-500">
                          Style options for {category}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          )}
          <div className="p-4 bg-white border-t mt-auto">
            <Button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100">
              Upgrade
            </Button>
          </div>
        </div>

        {/* Email Preview Area */}

        {/* <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold">
                A
              </div>
              <div className="w-32 h-24 bg-gray-200 rounded flex items-center justify-center">
                <Image className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>View email in browser</p>
              <p className="mt-2">
                *|ARCHIVE|* *|RECENT|* *|REWARDS|* *|END:IF|*
              </p>
              <p className="mt-2">update your preferences or unsubscribe</p>
              <img
                src="/placeholder.svg"
                alt="Mailchimp" 
                className="mx-auto mt-4 h-8"
              /> */}
        <WYSIWYGEditor contentItems={contentItems} />
      </div>
    </div>
  );
}

const Draggable = ({ item }) => {
  return (
    <motion.div
      draggable
      onDragStart={(e) => {
        // Only send the necessary properties
        const data = { name: item.name, type: item.type };
        e.dataTransfer.setData("application/json", JSON.stringify(data));
      }}
      className="cursor-pointer"
    >
      <Card className="p-4 flex items-center space-x-2 hover:bg-gray-50">
        <div className="text-2xl">{item.icon}</div>
        <div>{item.name}</div>
      </Card>
    </motion.div>
  );
};

// Debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
const WYSIWYGEditor = ({ contentItems }) => {
  const [emailContent, setEmailContent] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const debouncedHoveredIndex = useDebounce(hoveredIndex, 700);

  const handleAddElement = (item) => {
    setEmailContent((prev) => {
      const newContent = { type: item.type, content: item.name || "" };
      if (debouncedHoveredIndex !== null) {
        // Insert the new element at the hovered index
        const updatedContent = [...prev];
        updatedContent.splice(debouncedHoveredIndex, 0, newContent);
        return updatedContent;
      }
      // If no hover index, append to the end
      return [...prev, newContent];
    });
  };

  const handleContentChange = (index, newContent) => {
    const newEmailContent = [...emailContent];
    newEmailContent[index].content = newContent;
    setEmailContent(newEmailContent);
  };

  const handleDragOver = (index) => (e) => {
    e.preventDefault();
    setHoveredIndex(index);
  };

  const handleDragLeave = () => {
    setHoveredIndex(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("application/json");
    const item = JSON.parse(data);
    handleAddElement(item);
    setHoveredIndex(null); // Reset hovered index on drop
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="flex-1 p-4 bg-gray-200 border-l"
    >
      <div className="bg-white shadow-lg mx-auto max-w-2xl min-h-[600px]">
        <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col">
          {emailContent.map((element, index) => {
            const ContentComponent = contentItems.find(
              (item) => item.type === element.type
            )?.component;

            return (
              <div key={index} className="relative">
                {/* Placeholder Div */}
                {debouncedHoveredIndex === index && (
                  <div className="h-16 border-2 border-dashed border-gray-400 rounded-lg mb-2 transition-all duration-200 ease-in-out">
                    <div className="flex items-center justify-center h-full text-gray-500">
                      Drop Here
                    </div>
                  </div>
                )}

                <div
                  onDragOver={handleDragOver(index)}
                  onDragLeave={handleDragLeave}
                  className={`p-4 transition-all duration-200 ease-in-out ${
                    debouncedHoveredIndex === index ? "bg-gray-100" : ""
                  }`}
                >
                  <ContentComponent
                    content={element.content}
                    onChange={(newContent) =>
                      handleContentChange(index, newContent)
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
