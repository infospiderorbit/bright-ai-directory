export interface Tool {
  id: string;
  name: string;
  description: string;
  url?: string;
  upvotes: number;
  verified: boolean;
  rating: number;
  icon: string;
  category: string;
  subcategory: string;
}

export const toolsData: { [key: string]: { [key: string]: Tool[] } } = {
  "writing-editing": {
    "ai-blog-generator": [
      { id: "junia-ai", name: "Junia AI", description: "AI-powered blog content generator with SEO optimization", url: "", upvotes: 245, verified: true, rating: 4.6, icon: "📝", category: "writing-editing", subcategory: "ai-blog-generator" },
      { id: "writesonic", name: "Writesonic", description: "AI writing tool for blogs, ads, and marketing copy", url: "", upvotes: 623, verified: true, rating: 4.4, icon: "🚀", category: "writing-editing", subcategory: "ai-blog-generator" },
      { id: "aiktp", name: "Aiktp", description: "Advanced AI content creation platform for bloggers", url: "", upvotes: 156, verified: true, rating: 4.3, icon: "✨", category: "writing-editing", subcategory: "ai-blog-generator" },
      { id: "durable", name: "Durable", description: "AI website and blog builder with automated content generation", url: "", upvotes: 189, verified: true, rating: 4.5, icon: "🔧", category: "writing-editing", subcategory: "ai-blog-generator" },
      { id: "gravitywrite", name: "GravityWrite", description: "AI writing assistant for high-quality blog content", url: "", upvotes: 312, verified: true, rating: 4.7, icon: "🌟", category: "writing-editing", subcategory: "ai-blog-generator" }
    ],
    "ai-book-writing": [
      { id: "squibler", name: "Squibler", description: "AI-powered writing tool for authors and screenwriters", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-book-writing" },
      { id: "dabble", name: "Dabble", description: "Writing software with AI assistance for novel planning", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "✍️", category: "writing-editing", subcategory: "ai-book-writing" },
      { id: "book-by-anyone", name: "Book by Anyone", description: "AI book writing platform for aspiring authors", url: "", upvotes: 123, verified: false, rating: 4.1, icon: "📖", category: "writing-editing", subcategory: "ai-book-writing" },
      { id: "ebookmaker", name: "EbookMaker", description: "AI-powered ebook creation and formatting tool", url: "", upvotes: 189, verified: true, rating: 4.4, icon: "📱", category: "writing-editing", subcategory: "ai-book-writing" },
      { id: "automateed", name: "Automateed", description: "Automated content generation for book writing", url: "", upvotes: 98, verified: false, rating: 3.9, icon: "🤖", category: "writing-editing", subcategory: "ai-book-writing" }
    ],
    "ai-caption-generator": [
      { id: "ai-photocaption", name: "AI PhotoCaption—Text Generator", description: "Generate engaging captions for photos and social media", url: "", upvotes: 678, verified: true, rating: 4.6, icon: "📸", category: "writing-editing", subcategory: "ai-caption-generator" },
      { id: "submagic", name: "Submagic", description: "AI-powered subtitle and caption generation for videos", url: "", upvotes: 534, verified: true, rating: 4.5, icon: "🎬", category: "writing-editing", subcategory: "ai-caption-generator" },
      { id: "zeemo", name: "Zeemo", description: "Automatic subtitle generator with AI accuracy", url: "", upvotes: 445, verified: true, rating: 4.4, icon: "📺", category: "writing-editing", subcategory: "ai-caption-generator" },
      { id: "flick", name: "Flick", description: "Social media caption generator with hashtag suggestions", url: "", upvotes: 321, verified: true, rating: 4.3, icon: "📱", category: "writing-editing", subcategory: "ai-caption-generator" },
      { id: "planable", name: "Planable", description: "Social media planning tool with AI caption generation", url: "", upvotes: 267, verified: true, rating: 4.2, icon: "📅", category: "writing-editing", subcategory: "ai-caption-generator" }
    ],
    "ai-chat-generator": [
      { id: "chai", name: "CHAI", description: "AI chatbot platform for interactive conversations", url: "", upvotes: 789, verified: true, rating: 4.7, icon: "☕", category: "writing-editing", subcategory: "ai-chat-generator" },
      { id: "sharesome-ai", name: "Sharesome AI", description: "AI chat and content sharing platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "💬", category: "writing-editing", subcategory: "ai-chat-generator" },
      { id: "chatfuel", name: "Chatfuel", description: "AI chatbot builder for businesses", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🤖", category: "writing-editing", subcategory: "ai-chat-generator" },
      { id: "landbot", name: "Landbot", description: "Conversational AI platform for customer engagement", url: "", upvotes: 423, verified: true, rating: 4.4, icon: "🚀", category: "writing-editing", subcategory: "ai-chat-generator" },
      { id: "typebot", name: "Typebot", description: "Open-source chatbot builder with AI capabilities", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "⌨️", category: "writing-editing", subcategory: "ai-chat-generator" }
    ],
    "ai-copywriting": [
      { id: "contentful", name: "Contentful", description: "Headless CMS with AI-powered content creation", url: "", upvotes: 1234, verified: true, rating: 4.8, icon: "🏢", category: "writing-editing", subcategory: "ai-copywriting" },
      { id: "hotpot-ai", name: "Hotpot.ai", description: "AI copywriting and design tool for marketing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🔥", category: "writing-editing", subcategory: "ai-copywriting" },
      { id: "unbounce", name: "Unbounce", description: "Landing page builder with AI copywriting features", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "📄", category: "writing-editing", subcategory: "ai-copywriting" },
      { id: "typli-ai", name: "Typli.ai", description: "AI writing assistant for copywriting and content", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "✍️", category: "writing-editing", subcategory: "ai-copywriting" },
      { id: "nichesss", name: "nichesss", description: "AI-powered niche content and copy generator", url: "", upvotes: 456, verified: true, rating: 4.3, icon: "🎯", category: "writing-editing", subcategory: "ai-copywriting" }
    ],
    "ai-cover-letter-generator": [
      { id: "cvwizard", name: "CVwizard", description: "Professional CV and cover letter generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📄", category: "writing-editing", subcategory: "ai-cover-letter-generator" },
      { id: "careerflow", name: "Careerflow", description: "AI-powered career tools including cover letters", url: "", upvotes: 423, verified: true, rating: 4.4, icon: "💼", category: "writing-editing", subcategory: "ai-cover-letter-generator" },
      { id: "kickresume", name: "Kickresume", description: "Resume and cover letter builder with AI assistance", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🚀", category: "writing-editing", subcategory: "ai-cover-letter-generator" },
      { id: "wonsulting-ai", name: "WonsultingAI", description: "AI career consulting and cover letter optimization", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🏆", category: "writing-editing", subcategory: "ai-cover-letter-generator" },
      { id: "huntr", name: "Huntr", description: "Job tracking platform with AI cover letter tools", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "🎯", category: "writing-editing", subcategory: "ai-cover-letter-generator" }
    ],
    "ai-creative-writing": [
      { id: "sudowrite", name: "Sudowrite", description: "AI writing partner for creative fiction writing", url: "", upvotes: 789, verified: true, rating: 4.7, icon: "✨", category: "writing-editing", subcategory: "ai-creative-writing" },
      { id: "notebook-ai", name: "Notebook.ai", description: "World-building and character development tool", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📓", category: "writing-editing", subcategory: "ai-creative-writing" },
      { id: "lyricstudio", name: "LyricStudio", description: "AI-powered songwriting and lyric generation", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "🎵", category: "writing-editing", subcategory: "ai-creative-writing" },
      { id: "bedtimestory-ai", name: "Bedtimestory.ai", description: "AI-generated personalized children's stories", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🌙", category: "writing-editing", subcategory: "ai-creative-writing" },
      { id: "cowriter", name: "Cowriter", description: "AI writing companion for creative projects", url: "", upvotes: 189, verified: false, rating: 4.2, icon: "✍️", category: "writing-editing", subcategory: "ai-creative-writing" }
    ],
    "ai-description-generator": [
      { id: "vidiq", name: "VidIQ", description: "YouTube optimization tool with AI descriptions", url: "", upvotes: 1234, verified: true, rating: 4.8, icon: "📺", category: "writing-editing", subcategory: "ai-description-generator" },
      { id: "songtell", name: "Songtell", description: "AI music description and analysis platform", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "🎵", category: "writing-editing", subcategory: "ai-description-generator" },
      { id: "cyanite-ai", name: "Cyanite.ai", description: "AI music analysis and description service", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🎶", category: "writing-editing", subcategory: "ai-description-generator" },
      { id: "taja-ai", name: "Taja AI", description: "AI content optimization and description tool", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "🎯", category: "writing-editing", subcategory: "ai-description-generator" },
      { id: "styldod", name: "Styldod", description: "AI-powered real estate description generator", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "🏠", category: "writing-editing", subcategory: "ai-description-generator" }
    ],
    "ai-dialogue-generator": [
      { id: "confab", name: "Confab", description: "AI dialogue and conversation generator", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "💬", category: "writing-editing", subcategory: "ai-dialogue-generator" },
      { id: "infinite-convo", name: "Infinite Convo", description: "Endless AI-generated conversations", url: "", upvotes: 189, verified: false, rating: 4.2, icon: "♾️", category: "writing-editing", subcategory: "ai-dialogue-generator" },
      { id: "chatgpt-soliloquy", name: "ChatGPT-Soliloquy", description: "AI-powered internal dialogue generator", url: "", upvotes: 156, verified: true, rating: 4.1, icon: "🤔", category: "writing-editing", subcategory: "ai-dialogue-generator" },
      { id: "opinionate", name: "Opinionate", description: "AI debate and opinion dialogue creator", url: "", upvotes: 123, verified: false, rating: 4.0, icon: "💭", category: "writing-editing", subcategory: "ai-dialogue-generator" },
      { id: "ae-studio-skunkworks", name: "AE Studio's Same Day Skunkworks", description: "Rapid AI dialogue prototyping tool", url: "", upvotes: 98, verified: true, rating: 3.9, icon: "⚡", category: "writing-editing", subcategory: "ai-dialogue-generator" }
    ],
    "ai-ebook-generator": [
      { id: "designrr", name: "Designrr", description: "Convert content into professional ebooks", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-ebook-generator" },
      { id: "ebookmaker-2", name: "EbookMaker", description: "AI-powered ebook creation platform", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "📖", category: "writing-editing", subcategory: "ai-ebook-generator" },
      { id: "automateed-2", name: "Automateed", description: "Automated ebook generation and formatting", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🤖", category: "writing-editing", subcategory: "ai-ebook-generator" },
      { id: "ai-book-generator", name: "AI Book Generator", description: "Complete AI book creation solution", url: "", upvotes: 189, verified: true, rating: 4.3, icon: "📝", category: "writing-editing", subcategory: "ai-ebook-generator" },
      { id: "youbooks", name: "Youbooks", description: "Personalized AI ebook generator", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "👤", category: "writing-editing", subcategory: "ai-ebook-generator" }
    ],
    "ai-email-writer": [
      { id: "superhuman", name: "Superhuman", description: "AI-powered email client with smart compose", url: "", upvotes: 1567, verified: true, rating: 4.8, icon: "⚡", category: "writing-editing", subcategory: "ai-email-writer" },
      { id: "spark-mail", name: "Spark Mail", description: "Intelligent email app with AI writing assistance", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "✨", category: "writing-editing", subcategory: "ai-email-writer" },
      { id: "shortwave", name: "Shortwave", description: "Modern email client with AI features", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📧", category: "writing-editing", subcategory: "ai-email-writer" },
      { id: "success-ai", name: "Success.ai", description: "AI email outreach and writing platform", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "🎯", category: "writing-editing", subcategory: "ai-email-writer" },
      { id: "mailmaestro", name: "MailMaestro", description: "AI email writing assistant for professionals", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🎼", category: "writing-editing", subcategory: "ai-email-writer" }
    ]
  }
};

export const getToolsBySubcategory = (category: string, subcategory: string): Tool[] => {
  return toolsData[category]?.[subcategory] || [];
};