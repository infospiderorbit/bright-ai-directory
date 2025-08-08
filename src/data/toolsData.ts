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
    ],
    "ai-essay-writer": [
      { id: "terabox", name: "TeraBox", description: "Cloud storage with AI writing features", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📦", category: "writing-editing", subcategory: "ai-essay-writer" },
      { id: "jenni-ai", name: "Jenni AI", description: "AI writing assistant for academic papers", url: "", upvotes: 654, verified: true, rating: 4.6, icon: "🎓", category: "writing-editing", subcategory: "ai-essay-writer" },
      { id: "supa", name: "Supa", description: "AI-powered essay writing and research tool", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📚", category: "writing-editing", subcategory: "ai-essay-writer" },
      { id: "writeless", name: "Writeless", description: "Academic writing assistant with AI support", url: "", upvotes: 321, verified: true, rating: 4.3, icon: "✍️", category: "writing-editing", subcategory: "ai-essay-writer" },
      { id: "perfectessaywriter", name: "Perfectessaywriter.ai", description: "AI essay writing and editing platform", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🏆", category: "writing-editing", subcategory: "ai-essay-writer" }
    ],
    "ai-fanfic-generator": [
      { id: "deep-realms", name: "Deep Realms", description: "AI-powered fanfiction and story generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🌌", category: "writing-editing", subcategory: "ai-fanfic-generator" },
      { id: "tosh-tv-shows", name: "tosh TV Shows", description: "TV show fanfiction generator", url: "", upvotes: 234, verified: false, rating: 4.1, icon: "📺", category: "writing-editing", subcategory: "ai-fanfic-generator" },
      { id: "headcanon-generator", name: "Headcanon Generator XYZ", description: "Generate headcanons for your favorite fandoms", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "💭", category: "writing-editing", subcategory: "ai-fanfic-generator" },
      { id: "altplot", name: "AltPlot", description: "Alternative plot generator for fanfiction", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "🔄", category: "writing-editing", subcategory: "ai-fanfic-generator" },
      { id: "holo-ai", name: "Holo AI", description: "Interactive AI storytelling platform", url: "", upvotes: 123, verified: true, rating: 4.3, icon: "🤖", category: "writing-editing", subcategory: "ai-fanfic-generator" }
    ],
    "ai-grammar-checker": [
      { id: "languagetool", name: "LanguageTool", description: "Multilingual grammar and style checker", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🔍", category: "writing-editing", subcategory: "ai-grammar-checker" },
      { id: "quillbot", name: "QuillBot", description: "AI writing and grammar checking tool", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🪶", category: "writing-editing", subcategory: "ai-grammar-checker" },
      { id: "grammarly", name: "Grammarly", description: "AI-powered writing assistant and grammar checker", url: "", upvotes: 2134, verified: true, rating: 4.8, icon: "✅", category: "writing-editing", subcategory: "ai-grammar-checker" },
      { id: "prowritingaid", name: "ProWritingAid", description: "Comprehensive writing analysis and grammar tool", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "📝", category: "writing-editing", subcategory: "ai-grammar-checker" },
      { id: "toppdf", name: "TopPDF", description: "PDF editing with grammar checking features", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "📄", category: "writing-editing", subcategory: "ai-grammar-checker" }
    ],
    "ai-image-description-generator": [
      { id: "image-describer", name: "Image Describer", description: "AI-powered image description generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🖼️", category: "writing-editing", subcategory: "ai-image-description-generator" },
      { id: "describe-image-ai", name: "Describe Image & Picture - AI Image Description, Markdown, and Text Converter", description: "Convert images to detailed text descriptions", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📸", category: "writing-editing", subcategory: "ai-image-description-generator" },
      { id: "alttext-ai", name: "AltText.ai", description: "Automatic alt text generation for images", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🏷️", category: "writing-editing", subcategory: "ai-image-description-generator" },
      { id: "continual-engine", name: "Continual Engine", description: "AI-powered content analysis and description", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "⚙️", category: "writing-editing", subcategory: "ai-image-description-generator" },
      { id: "visionati", name: "Visionati", description: "AI vision analysis and description tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "👁️", category: "writing-editing", subcategory: "ai-image-description-generator" }
    ],
    "ai-inspirational-quotes": [
      { id: "inspirobot", name: "InspiroBot", description: "AI-generated inspirational quotes", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "🤖", category: "writing-editing", subcategory: "ai-inspirational-quotes" },
      { id: "capybara-affirmations", name: "Capybara Affirmations AI", description: "Cute capybara-themed positive affirmations", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "🦌", category: "writing-editing", subcategory: "ai-inspirational-quotes" },
      { id: "atfirst-affirmations", name: "AtFirst - Daily Affirmations", description: "Personalized daily affirmations and quotes", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🌅", category: "writing-editing", subcategory: "ai-inspirational-quotes" },
      { id: "daily-nightly-affirmations", name: "Daily, Nightly-AI Affirmations", description: "Morning and evening AI affirmations", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "🌙", category: "writing-editing", subcategory: "ai-inspirational-quotes" },
      { id: "harmonis", name: "Harmonis", description: "Harmony-focused inspirational content generator", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "🎵", category: "writing-editing", subcategory: "ai-inspirational-quotes" }
    ],
    "ai-job-description-generator": [
      { id: "recruit-crm", name: "Recruit CRM", description: "CRM with AI job description generation", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "💼", category: "writing-editing", subcategory: "ai-job-description-generator" },
      { id: "jobed", name: "Jobed", description: "AI-powered job description creator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📋", category: "writing-editing", subcategory: "ai-job-description-generator" },
      { id: "helio-ai", name: "Helio.AI", description: "AI recruitment and job description tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "☀️", category: "writing-editing", subcategory: "ai-job-description-generator" },
      { id: "loubby-ai", name: "Loubby AI", description: "AI assistant for HR and job descriptions", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🤖", category: "writing-editing", subcategory: "ai-job-description-generator" },
      { id: "recruitryte", name: "recruitRyte", description: "AI-powered recruitment writing tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "✍️", category: "writing-editing", subcategory: "ai-job-description-generator" }
    ],
    "ai-letter-writer": [
      { id: "dispute-panda", name: "Dispute Panda", description: "AI letter generator for disputes and complaints", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🐼", category: "writing-editing", subcategory: "ai-letter-writer" },
      { id: "dear-ai", name: "Dear Ai", description: "Personal letter writing AI assistant", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "💌", category: "writing-editing", subcategory: "ai-letter-writer" },
      { id: "ai-postcard-generator", name: "AI Postcard Generator", description: "Generate personalized postcard messages", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📮", category: "writing-editing", subcategory: "ai-letter-writer" },
      { id: "iquit-ai", name: "iQuit.ai", description: "AI resignation letter generator", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "👋", category: "writing-editing", subcategory: "ai-letter-writer" },
      { id: "happy-dads", name: "1000 Happy Dads", description: "AI tool for family-focused letter writing", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "👨‍👧‍👦", category: "writing-editing", subcategory: "ai-letter-writer" }
    ],
    "ai-love-letter-generator": [
      { id: "wonderful-valentimes", name: "Wonderful Valemtimes", description: "Romantic Valentine's letter generator", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "💝", category: "writing-editing", subcategory: "ai-love-letter-generator" },
      { id: "selfloveletter", name: "SelfLoveLetter", description: "Self-love and affirmation letter generator", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "💖", category: "writing-editing", subcategory: "ai-love-letter-generator" },
      { id: "true-love-letter", name: "True Love Letter", description: "Authentic romantic letter AI generator", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "💕", category: "writing-editing", subcategory: "ai-love-letter-generator" },
      { id: "loveleetr", name: "LoveLeetr", description: "Personalized love letter creation tool", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "💌", category: "writing-editing", subcategory: "ai-love-letter-generator" },
      { id: "love-letter-generator", name: "Love Letter Generator", description: "Simple AI love letter generator", url: "", upvotes: 123, verified: true, rating: 4.0, icon: "❤️", category: "writing-editing", subcategory: "ai-love-letter-generator" }
    ],
    "ai-message-generator": [
      { id: "texts", name: "Texts", description: "AI-powered message generation platform", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💬", category: "writing-editing", subcategory: "ai-message-generator" },
      { id: "celebrateally", name: "CelebrateAlly", description: "AI celebration and congratulations messages", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🎉", category: "writing-editing", subcategory: "ai-message-generator" },
      { id: "vibly", name: "Vibly", description: "AI social media message generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📱", category: "writing-editing", subcategory: "ai-message-generator" },
      { id: "sayhi", name: "SayHi", description: "AI conversation starter and message tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "👋", category: "writing-editing", subcategory: "ai-message-generator" },
      { id: "heartstring-ai", name: "Heartstring AI", description: "Emotional message generation AI", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "💝", category: "writing-editing", subcategory: "ai-message-generator" }
    ],
    "ai-movie-script-generator": [
      { id: "nolan-ai", name: "NolanAI", description: "AI screenwriting and script development tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎬", category: "writing-editing", subcategory: "ai-movie-script-generator" },
      { id: "scenecraftr", name: "SceneCraftr", description: "AI scene and screenplay generator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎭", category: "writing-editing", subcategory: "ai-movie-script-generator" },
      { id: "filmflow", name: "FilmFlow", description: "AI film script and story development", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📽️", category: "writing-editing", subcategory: "ai-movie-script-generator" },
      { id: "filmassistant", name: "filmassistant.io", description: "AI assistant for film script writing", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🎥", category: "writing-editing", subcategory: "ai-movie-script-generator" },
      { id: "aiscreenwriter", name: "AIScreenwriter", description: "Professional AI screenplay generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "✍️", category: "writing-editing", subcategory: "ai-movie-script-generator" }
    ],
    "ai-name-generator": [
      { id: "namelix", name: "Namelix", description: "AI business name generator", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🏷️", category: "writing-editing", subcategory: "ai-name-generator" },
      { id: "maxstudio-api", name: "MaxStudio API", description: "API for AI-powered name generation", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🔌", category: "writing-editing", subcategory: "ai-name-generator" },
      { id: "dnd-name-generator", name: "DnD Name Generator", description: "Fantasy character name generator for D&D", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎲", category: "writing-editing", subcategory: "ai-name-generator" },
      { id: "cuqui-baby-names", name: "Cuqui Baby Names", description: "AI baby name suggestion tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "👶", category: "writing-editing", subcategory: "ai-name-generator" },
      { id: "randomx-ai", name: "RandomX.ai", description: "Random name and content generator", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🎰", category: "writing-editing", subcategory: "ai-name-generator" }
    ],
    "ai-newsletter-generator": [
      { id: "contrast", name: "Contrast", description: "AI newsletter creation and design tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📰", category: "writing-editing", subcategory: "ai-newsletter-generator" },
      { id: "hoppy-copy", name: "Hoppy Copy", description: "AI email and newsletter copywriting", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📧", category: "writing-editing", subcategory: "ai-newsletter-generator" },
      { id: "letterpal", name: "Letterpal", description: "AI newsletter writing assistant", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "✉️", category: "writing-editing", subcategory: "ai-newsletter-generator" },
      { id: "promo-ai", name: "Promo.ai", description: "AI promotional newsletter generator", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📢", category: "writing-editing", subcategory: "ai-newsletter-generator" },
      { id: "auto-mailer", name: "Auto Mailer", description: "Automated newsletter creation tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🤖", category: "writing-editing", subcategory: "ai-newsletter-generator" }
    ],
    "ai-novel": [
      { id: "ai-novelist", name: "AI Novelist", description: "AI novel writing and generation platform", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-novel" },
      { id: "squibler-novel", name: "Squibler", description: "AI-powered novel writing tool", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "✍️", category: "writing-editing", subcategory: "ai-novel" },
      { id: "midreal", name: "MidReal", description: "Interactive AI novel and story platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📖", category: "writing-editing", subcategory: "ai-novel" },
      { id: "novelistai", name: "NovelistAI", description: "AI assistant for novel writing", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🤖", category: "writing-editing", subcategory: "ai-novel" },
      { id: "webnovels-ai", name: "Webnovels AI", description: "AI web novel generation platform", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🌐", category: "writing-editing", subcategory: "ai-novel" }
    ],
    "ai-outline-generator": [
      { id: "surfer", name: "Surfer", description: "SEO content outline generator", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🏄", category: "writing-editing", subcategory: "ai-outline-generator" },
      { id: "reflect-notes", name: "Reflect Notes", description: "AI note-taking with outline generation", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "💭", category: "writing-editing", subcategory: "ai-outline-generator" },
      { id: "myessaywriter", name: "MyEssayWriter.ai", description: "AI essay outline and writing tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📝", category: "writing-editing", subcategory: "ai-outline-generator" },
      { id: "subtxt", name: "Subtxt", description: "Story structure and outline generator", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📋", category: "writing-editing", subcategory: "ai-outline-generator" },
      { id: "superblog", name: "Superblog", description: "AI blog outline and content generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "📄", category: "writing-editing", subcategory: "ai-outline-generator" }
    ],
    "ai-paragraph-generator": [
      { id: "ai-paragraph-generator", name: "AI Paragraph Generator", description: "Generate coherent paragraphs with AI", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "📄", category: "writing-editing", subcategory: "ai-paragraph-generator" },
      { id: "qozex-paragraph", name: "Qozex AI Paragraph Generator", description: "Advanced AI paragraph creation tool", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "✍️", category: "writing-editing", subcategory: "ai-paragraph-generator" },
      { id: "ai-paragraph-gen", name: "Ai Paragraph Generator", description: "Simple AI paragraph generation", url: "", upvotes: 345, verified: true, rating: 4.2, icon: "📝", category: "writing-editing", subcategory: "ai-paragraph-generator" },
      { id: "paragraph-generator-xyz", name: "Paragraph Generator AI - Free | XYZ", description: "Free AI paragraph generator tool", url: "", upvotes: 234, verified: true, rating: 4.1, icon: "🆓", category: "writing-editing", subcategory: "ai-paragraph-generator" },
      { id: "linkboss", name: "LinkBoss", description: "SEO paragraph and content generator", url: "", upvotes: 189, verified: false, rating: 4.0, icon: "🔗", category: "writing-editing", subcategory: "ai-paragraph-generator" }
    ],
    "ai-paraphraser": [
      { id: "free-paraphrasing-tool", name: "Free Paraphrasing Tool", description: "Free AI text paraphrasing service", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🔄", category: "writing-editing", subcategory: "ai-paraphraser" },
      { id: "quillbot-para", name: "QuillBot", description: "AI paraphrasing and rewriting tool", url: "", upvotes: 987, verified: true, rating: 4.7, icon: "🪶", category: "writing-editing", subcategory: "ai-paraphraser" },
      { id: "paraphraser-io", name: "Paraphraser.io", description: "Online AI paraphrasing tool", url: "", upvotes: 765, verified: true, rating: 4.5, icon: "💻", category: "writing-editing", subcategory: "ai-paraphraser" },
      { id: "languagetool-para", name: "LanguageTool", description: "Grammar checker with paraphrasing", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🔍", category: "writing-editing", subcategory: "ai-paraphraser" },
      { id: "toppdf-para", name: "TopPDF", description: "PDF editing with paraphrasing features", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "📄", category: "writing-editing", subcategory: "ai-paraphraser" }
    ],
    "ai-plot-generator": [
      { id: "squibler-plot", name: "Squibler", description: "AI plot and story development tool", url: "", upvotes: 456, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-plot-generator" },
      { id: "ifnovels", name: "IFNovels", description: "Interactive fiction plot generator", url: "", upvotes: 345, verified: true, rating: 4.4, icon: "🎮", category: "writing-editing", subcategory: "ai-plot-generator" },
      { id: "plotlime", name: "Plotlime", description: "AI story plot and outline generator", url: "", upvotes: 234, verified: true, rating: 4.3, icon: "🍋", category: "writing-editing", subcategory: "ai-plot-generator" },
      { id: "lore-sage", name: "Lore Sage", description: "Fantasy world and plot generator", url: "", upvotes: 189, verified: true, rating: 4.2, icon: "🧙", category: "writing-editing", subcategory: "ai-plot-generator" },
      { id: "sudowrite-plot", name: "Sudowrite", description: "AI creative writing and plot assistant", url: "", upvotes: 156, verified: false, rating: 4.1, icon: "✨", category: "writing-editing", subcategory: "ai-plot-generator" }
    ],
    "ai-poem-generator": [
      { id: "acrostic-ai", name: "Acrostic AI", description: "AI acrostic poem generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-poem-generator" },
      { id: "poem-generator-io", name: "PoemGenerator.io", description: "Online AI poetry creation tool", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎭", category: "writing-editing", subcategory: "ai-poem-generator" },
      { id: "aiepics", name: "AIEpics", description: "Epic poetry generator with AI", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "⚔️", category: "writing-editing", subcategory: "ai-poem-generator" },
      { id: "gmail-poetry", name: "Replaces suggested replies on Gmail messages with poetic verse", description: "Gmail extension for poetic responses", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "📧", category: "writing-editing", subcategory: "ai-poem-generator" },
      { id: "free-poem-generator", name: "Free AI Poem Generator", description: "Free AI poetry creation tool", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "🆓", category: "writing-editing", subcategory: "ai-poem-generator" }
    ],
    "ai-product-description-generator": [
      { id: "hypotenuse-ai", name: "Hypotenuse AI", description: "AI product description and content generator", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "📐", category: "writing-editing", subcategory: "ai-product-description-generator" },
      { id: "pagepilot-ai", name: "PagePilot.ai", description: "AI landing page and product description tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🛩️", category: "writing-editing", subcategory: "ai-product-description-generator" },
      { id: "mydesigns-io", name: "MyDesigns.io", description: "AI design and product description platform", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎨", category: "writing-editing", subcategory: "ai-product-description-generator" },
      { id: "poky", name: "POKY - Product Importer", description: "Product importing with AI descriptions", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📦", category: "writing-editing", subcategory: "ai-product-description-generator" },
      { id: "insightfactor", name: "InsightFactor", description: "AI product analysis and description", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🔍", category: "writing-editing", subcategory: "ai-product-description-generator" }
    ],
    "ai-prompt-generator": [
      { id: "flowgpt", name: "FlowGPT", description: "AI prompt sharing and generation platform", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🌊", category: "writing-editing", subcategory: "ai-prompt-generator" },
      { id: "aiprm", name: "AIPRM", description: "AI prompt management for ChatGPT", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "⚡", category: "writing-editing", subcategory: "ai-prompt-generator" },
      { id: "imageprompt-org", name: "ImagePrompt.org", description: "AI image prompt generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🖼️", category: "writing-editing", subcategory: "ai-prompt-generator" },
      { id: "promptbase", name: "PromptBase", description: "Marketplace for AI prompts", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "🏪", category: "writing-editing", subcategory: "ai-prompt-generator" },
      { id: "chatgpt-mega-prompts", name: "200+ ChatGPT Mega-Prompts for Solopreneurs", description: "Business-focused ChatGPT prompts", url: "", upvotes: 432, verified: true, rating: 4.3, icon: "💼", category: "writing-editing", subcategory: "ai-prompt-generator" }
    ],
    "ai-proofreading": [
      { id: "scribbr", name: "Scribbr", description: "Academic proofreading and editing service", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎓", category: "writing-editing", subcategory: "ai-proofreading" },
      { id: "writefull", name: "Writefull", description: "AI proofreading for academic writing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-proofreading" },
      { id: "editgpt", name: "editGPT", description: "AI-powered text editing and proofreading", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "✏️", category: "writing-editing", subcategory: "ai-proofreading" },
      { id: "trinka-ai", name: "Trinka AI", description: "AI grammar checker for academic writing", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🔍", category: "writing-editing", subcategory: "ai-proofreading" },
      { id: "katteb-ai", name: "Katteb AI", description: "AI writing and proofreading assistant", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🤖", category: "writing-editing", subcategory: "ai-proofreading" }
    ],
    "ai-quotes-generator": [
      { id: "inspirobot-quotes", name: "InspiroBot", description: "AI-generated inspirational quotes", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🤖", category: "writing-editing", subcategory: "ai-quotes-generator" },
      { id: "quotesmaker", name: "QuotesMaker", description: "Custom quote generation tool", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "💬", category: "writing-editing", subcategory: "ai-quotes-generator" },
      { id: "quotegenerator-io", name: "QuoteGenerator.io", description: "Online quote generation platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📝", category: "writing-editing", subcategory: "ai-quotes-generator" },
      { id: "quoai", name: "Quoai", description: "AI quote creation and sharing", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "💭", category: "writing-editing", subcategory: "ai-quotes-generator" },
      { id: "mindspark-ai", name: "MindSparkAI", description: "Inspirational quote generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "⚡", category: "writing-editing", subcategory: "ai-quotes-generator" }
    ],
    "ai-report-writing": [
      { id: "teachers-report-writer", name: "Teachers Report Writer", description: "AI tool for educational report writing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "👩‍🏫", category: "writing-editing", subcategory: "ai-report-writing" },
      { id: "geniuspt", name: "GeniusPT", description: "AI report generation for professionals", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🧠", category: "writing-editing", subcategory: "ai-report-writing" },
      { id: "reportgpt", name: "ReportGPT", description: "AI-powered report writing assistant", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📊", category: "writing-editing", subcategory: "ai-report-writing" },
      { id: "pentra", name: "Pentra", description: "AI technical writing and reporting", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "✒️", category: "writing-editing", subcategory: "ai-report-writing" },
      { id: "opusense", name: "Opusense", description: "AI business report generation", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "📈", category: "writing-editing", subcategory: "ai-report-writing" }
    ],
    "ai-repurpose": [
      { id: "opus-clip", name: "Opus Clip", description: "AI video content repurposing tool", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🎬", category: "writing-editing", subcategory: "ai-repurpose" },
      { id: "castmagic", name: "Castmagic", description: "Podcast content repurposing with AI", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "🎙️", category: "writing-editing", subcategory: "ai-repurpose" },
      { id: "hypefury", name: "Hypefury", description: "Social media content repurposing", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🚀", category: "writing-editing", subcategory: "ai-repurpose" },
      { id: "contrast-repurpose", name: "Contrast", description: "Content repurposing and optimization", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🔄", category: "writing-editing", subcategory: "ai-repurpose" },
      { id: "exemplary-ai", name: "Exemplary AI", description: "AI content transformation and repurposing", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "✨", category: "writing-editing", subcategory: "ai-repurpose" }
    ],
    "ai-review-generator": [
      { id: "mara-ai", name: "MARA AI", description: "AI customer review response generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "⭐", category: "writing-editing", subcategory: "ai-review-generator" },
      { id: "reviewly", name: "Reviewly", description: "AI review generation and management", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-review-generator" },
      { id: "autoblogging-ai", name: "Autoblogging.ai", description: "AI content and review generation", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🤖", category: "writing-editing", subcategory: "ai-review-generator" },
      { id: "spokk", name: "Spokk", description: "AI product review generator", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🗣️", category: "writing-editing", subcategory: "ai-review-generator" },
      { id: "roastlinkedin", name: "RoastLinkedIn.com", description: "AI LinkedIn profile review tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "💼", category: "writing-editing", subcategory: "ai-review-generator" }
    ],
    "ai-rewriter": [
      { id: "stealthwriter", name: "StealthWriter", description: "AI text rewriting for undetectable content", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🥷", category: "writing-editing", subcategory: "ai-rewriter" },
      { id: "free-paraphrasing-rewriter", name: "Free Paraphrasing Tool", description: "Free AI text rewriting service", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "🔄", category: "writing-editing", subcategory: "ai-rewriter" },
      { id: "wordtune", name: "Wordtune", description: "AI writing companion and rewriter", url: "", upvotes: 765, verified: true, rating: 4.7, icon: "🎵", category: "writing-editing", subcategory: "ai-rewriter" },
      { id: "paraphraser-rewriter", name: "Paraphraser.io", description: "Online AI text rewriting tool", url: "", upvotes: 654, verified: true, rating: 4.4, icon: "💻", category: "writing-editing", subcategory: "ai-rewriter" },
      { id: "ai-undetect", name: "AI Undetect", description: "AI text humanization and rewriting", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🔍", category: "writing-editing", subcategory: "ai-rewriter" }
    ],
    "ai-script-writing": [
      { id: "squibler-script", name: "Squibler", description: "AI screenplay and script writing tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-script-writing" },
      { id: "camtasia", name: "Camtasia", description: "Screen recording with AI script features", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎥", category: "writing-editing", subcategory: "ai-script-writing" },
      { id: "dubs-io", name: "Dubs.io", description: "AI dubbing and script generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎭", category: "writing-editing", subcategory: "ai-script-writing" },
      { id: "subscribr", name: "Subscribr", description: "AI script writing for content creators", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📺", category: "writing-editing", subcategory: "ai-script-writing" },
      { id: "influee", name: "Influee", description: "AI influencer script generator", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "📱", category: "writing-editing", subcategory: "ai-script-writing" }
    ],
    "ai-sentence-generator": [
      { id: "ai-sentence-generator", name: "AI Sentence Generator", description: "Generate coherent sentences with AI", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-sentence-generator" },
      { id: "english-chrome-extension", name: "English Chrome Extension", description: "Chrome extension for English sentence help", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🌐", category: "writing-editing", subcategory: "ai-sentence-generator" },
      { id: "vocabmate", name: "VocabMate", description: "Vocabulary and sentence building tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📚", category: "writing-editing", subcategory: "ai-sentence-generator" },
      { id: "simple-english-plugin", name: "Simple English Learning Plugin", description: "Browser plugin for English sentence help", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "🔌", category: "writing-editing", subcategory: "ai-sentence-generator" },
      { id: "typegenie", name: "TypeGenie", description: "AI typing and sentence completion", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "⌨️", category: "writing-editing", subcategory: "ai-sentence-generator" }
    ],
    "ai-short-story-generator": [
      { id: "midreal-stories", name: "MidReal", description: "Interactive AI story generation platform", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📖", category: "writing-editing", subcategory: "ai-short-story-generator" },
      { id: "storybooks", name: "Storybooks", description: "AI children's storybook generator", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📚", category: "writing-editing", subcategory: "ai-short-story-generator" },
      { id: "mytales", name: "MyTales", description: "Personalized AI story creation", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "✨", category: "writing-editing", subcategory: "ai-short-story-generator" },
      { id: "storywizard-ai", name: "Storywizard.ai", description: "AI story writing and generation tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🧙", category: "writing-editing", subcategory: "ai-short-story-generator" },
      { id: "makemytale", name: "MakeMyTale", description: "AI tale and story generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "📝", category: "writing-editing", subcategory: "ai-short-story-generator" }
    ],
    "ai-slogan-generator": [
      { id: "brandkiit", name: "BrandKiit", description: "AI branding and slogan generator", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🏷️", category: "writing-editing", subcategory: "ai-slogan-generator" },
      { id: "mybrandgen", name: "myBrandgen.com", description: "AI brand name and slogan generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎨", category: "writing-editing", subcategory: "ai-slogan-generator" },
      { id: "10web", name: "10Web", description: "AI website builder with slogan generator", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "🌐", category: "writing-editing", subcategory: "ai-slogan-generator" },
      { id: "zoviz", name: "Zoviz", description: "AI logo and slogan creation tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🎨", category: "writing-editing", subcategory: "ai-slogan-generator" },
      { id: "prepostseo", name: "Prepostseo", description: "SEO tools with slogan generator", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🔍", category: "writing-editing", subcategory: "ai-slogan-generator" }
    ],
    "ai-spell-check": [
      { id: "goodnotes", name: "Goodnotes", description: "Digital note-taking with AI spell check", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📝", category: "writing-editing", subcategory: "ai-spell-check" },
      { id: "textgears", name: "TextGears", description: "AI grammar and spell checking API", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "⚙️", category: "writing-editing", subcategory: "ai-spell-check" },
      { id: "linguix", name: "Linguix", description: "AI writing assistant with spell check", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📚", category: "writing-editing", subcategory: "ai-spell-check" },
      { id: "diacritice-corecta", name: "Corectarea automată a diacriticelor", description: "Automatic Romanian diacritics correction", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🇷🇴", category: "writing-editing", subcategory: "ai-spell-check" },
      { id: "safespelling", name: "SafeSpelling", description: "AI-powered spell checking tool", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "🛡️", category: "writing-editing", subcategory: "ai-spell-check" }
    ],
    "ai-story-generator": [
      { id: "perchance-story", name: "Perchance", description: "Random story and content generator", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🎲", category: "writing-editing", subcategory: "ai-story-generator" },
      { id: "squibler-story", name: "Squibler", description: "AI story writing and development tool", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "ai-story-generator" },
      { id: "sudowrite-story", name: "Sudowrite", description: "AI creative writing and story generator", url: "", upvotes: 789, verified: true, rating: 4.7, icon: "✨", category: "writing-editing", subcategory: "ai-story-generator" },
      { id: "dreampress-ai", name: "DreamPress AI", description: "AI story generation platform", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "💭", category: "writing-editing", subcategory: "ai-story-generator" },
      { id: "dreamgen", name: "DreamGen", description: "AI story and content generator", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🌙", category: "writing-editing", subcategory: "ai-story-generator" }
    ],
    "ai-subtitle-generator": [
      { id: "zeemo-subtitle", name: "Zeemo", description: "AI subtitle generation for videos", url: "", upvotes: 789, verified: true, rating: 4.6, icon: "📺", category: "writing-editing", subcategory: "ai-subtitle-generator" },
      { id: "capcut", name: "CapCut", description: "Video editor with AI subtitle generation", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "✂️", category: "writing-editing", subcategory: "ai-subtitle-generator" },
      { id: "happy-scribe", name: "Happy Scribe", description: "AI transcription and subtitle service", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "😊", category: "writing-editing", subcategory: "ai-subtitle-generator" },
      { id: "veed-io", name: "VEED.IO", description: "Online video editor with AI subtitles", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🎬", category: "writing-editing", subcategory: "ai-subtitle-generator" },
      { id: "clideo", name: "Clideo", description: "Video editing tools with subtitle generation", url: "", upvotes: 345, verified: false, rating: 4.3, icon: "🎥", category: "writing-editing", subcategory: "ai-subtitle-generator" }
    ],
    "ai-summarizer": [
      { id: "lilys-ai", name: "Lilys AI", description: "AI document and text summarization", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🌸", category: "writing-editing", subcategory: "ai-summarizer" },
      { id: "read-ai", name: "Read AI", description: "AI reading and summarization assistant", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "📖", category: "writing-editing", subcategory: "ai-summarizer" },
      { id: "ai-summarizer", name: "AI Summarizer", description: "Text summarization with AI", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "📄", category: "writing-editing", subcategory: "ai-summarizer" },
      { id: "studocu", name: "Studocu", description: "Student platform with AI summarization", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "🎓", category: "writing-editing", subcategory: "ai-summarizer" },
      { id: "otter-ai", name: "Otter.ai", description: "AI meeting transcription and summarization", url: "", upvotes: 654, verified: true, rating: 4.8, icon: "🦦", category: "writing-editing", subcategory: "ai-summarizer" }
    ],
    "ai-text-classifier": [
      { id: "canvs-ai", name: "Canvs AI", description: "AI text analysis and classification", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🎨", category: "writing-editing", subcategory: "ai-text-classifier" },
      { id: "yay-forms", name: "Yay! Forms", description: "Form builder with AI text classification", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-text-classifier" },
      { id: "iamip", name: "IamIP", description: "AI-powered text analysis platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🔍", category: "writing-editing", subcategory: "ai-text-classifier" },
      { id: "hs-code", name: "The HS Code", description: "Trade classification with AI text analysis", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📊", category: "writing-editing", subcategory: "ai-text-classifier" },
      { id: "chatpulse", name: "ChatPulse", description: "AI chat and text sentiment analysis", url: "", upvotes: 189, verified: false, rating: 4.1, icon: "💬", category: "writing-editing", subcategory: "ai-text-classifier" }
    ],
    "ai-text-generator": [
      { id: "perchance-text", name: "Perchance", description: "Random text and content generator", url: "", upvotes: 1567, verified: true, rating: 4.6, icon: "🎲", category: "writing-editing", subcategory: "ai-text-generator" },
      { id: "venice-ai", name: "Venice AI", description: "AI text generation platform", url: "", upvotes: 1234, verified: true, rating: 4.5, icon: "🏛️", category: "writing-editing", subcategory: "ai-text-generator" },
      { id: "ai-photocaption-text", name: "AI PhotoCaption—Text Generator", description: "AI text generation for photos and captions", url: "", upvotes: 987, verified: true, rating: 4.7, icon: "📸", category: "writing-editing", subcategory: "ai-text-generator" },
      { id: "hyperwrite", name: "HyperWrite", description: "AI writing and text generation tool", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "⚡", category: "writing-editing", subcategory: "ai-text-generator" },
      { id: "toolsaday", name: "Toolsaday", description: "Daily AI tools including text generation", url: "", upvotes: 567, verified: false, rating: 4.3, icon: "🔧", category: "writing-editing", subcategory: "ai-text-generator" }
    ],
    "ai-text-message-generator": [
      { id: "structurely", name: "Structurely", description: "AI real estate text messaging", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🏠", category: "writing-editing", subcategory: "ai-text-message-generator" },
      { id: "mtalkz", name: "Mtalkz", description: "AI messaging and communication platform", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "💬", category: "writing-editing", subcategory: "ai-text-message-generator" },
      { id: "verse-ai", name: "Verse.ai", description: "AI conversation and messaging tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🎭", category: "writing-editing", subcategory: "ai-text-message-generator" },
      { id: "firetexts", name: "FireTexts", description: "AI text message generator for dating", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "🔥", category: "writing-editing", subcategory: "ai-text-message-generator" },
      { id: "textgpt", name: "TextGPT", description: "AI text messaging assistant", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "📱", category: "writing-editing", subcategory: "ai-text-message-generator" }
    ],
    "ai-thesis-generator": [
      { id: "thesis-ai", name: "ThesisAI", description: "AI thesis writing and generation tool", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🎓", category: "writing-editing", subcategory: "ai-thesis-generator" },
      { id: "som-ai", name: "SOM AI", description: "Academic AI writing assistant", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📚", category: "writing-editing", subcategory: "ai-thesis-generator" },
      { id: "scipub-plus", name: "SciPub+", description: "Scientific publication writing tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "🔬", category: "writing-editing", subcategory: "ai-thesis-generator" },
      { id: "v0-report", name: "v0 Report", description: "AI report and thesis generator", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "📊", category: "writing-editing", subcategory: "ai-thesis-generator" },
      { id: "academicideas", name: "AcademicIdeas", description: "AI academic writing and thesis ideas", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "💡", category: "writing-editing", subcategory: "ai-thesis-generator" }
    ],
    "ai-title-generator": [
      { id: "vidiq-title", name: "VidIQ", description: "YouTube title optimization with AI", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📺", category: "writing-editing", subcategory: "ai-title-generator" },
      { id: "pikzels", name: "Pikzels", description: "AI thumbnail and title generator", url: "", upvotes: 567, verified: true, rating: 4.5, icon: "🖼️", category: "writing-editing", subcategory: "ai-title-generator" },
      { id: "picsee", name: "PicSee", description: "Link management with AI title generation", url: "", upvotes: 432, verified: true, rating: 4.4, icon: "🔗", category: "writing-editing", subcategory: "ai-title-generator" },
      { id: "thumblytics", name: "Thumblytics", description: "YouTube thumbnail and title analytics", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "📊", category: "writing-editing", subcategory: "ai-title-generator" },
      { id: "taja-ai-title", name: "Taja AI", description: "AI content optimization and titles", url: "", upvotes: 234, verified: false, rating: 4.2, icon: "🎯", category: "writing-editing", subcategory: "ai-title-generator" }
    ],
    "ai-writing": [
      { id: "scribbr-writing", name: "Scribbr", description: "Academic writing assistance and editing", url: "", upvotes: 1567, verified: true, rating: 4.7, icon: "🎓", category: "writing-editing", subcategory: "ai-writing" },
      { id: "quillbot-writing", name: "QuillBot", description: "AI writing and paraphrasing tool", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🪶", category: "writing-editing", subcategory: "ai-writing" },
      { id: "hix-ai", name: "HIX.AI", description: "All-in-one AI writing platform", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "✨", category: "writing-editing", subcategory: "ai-writing" },
      { id: "decopy-ai", name: "Decopy AI", description: "AI copywriting and content creation", url: "", upvotes: 789, verified: true, rating: 4.4, icon: "📝", category: "writing-editing", subcategory: "ai-writing" },
      { id: "tinywow", name: "TinyWow", description: "Free AI writing and editing tools", url: "", upvotes: 567, verified: false, rating: 4.3, icon: "🔧", category: "writing-editing", subcategory: "ai-writing" }
    ],
    "ai-writing-assistants": [
      { id: "prowritingaid-assistant", name: "ProWritingAid", description: "Comprehensive AI writing analysis tool", url: "", upvotes: 1789, verified: true, rating: 4.8, icon: "📝", category: "writing-editing", subcategory: "ai-writing-assistants" },
      { id: "smodin", name: "Smodin", description: "AI writing assistant and homework helper", url: "", upvotes: 1234, verified: true, rating: 4.6, icon: "🤖", category: "writing-editing", subcategory: "ai-writing-assistants" },
      { id: "toolsmart-humanize", name: "Toolsmart Free Humanize AI", description: "AI text humanization tool", url: "", upvotes: 987, verified: true, rating: 4.5, icon: "👥", category: "writing-editing", subcategory: "ai-writing-assistants" },
      { id: "sudowrite-assistant", name: "Sudowrite", description: "AI creative writing partner", url: "", upvotes: 789, verified: true, rating: 4.7, icon: "✨", category: "writing-editing", subcategory: "ai-writing-assistants" },
      { id: "heidi-health", name: "Heidi Health", description: "AI writing assistant for healthcare", url: "", upvotes: 567, verified: false, rating: 4.4, icon: "🏥", category: "writing-editing", subcategory: "ai-writing-assistants" }
    ],
    "headlines-ai": [
      { id: "topicfinder", name: "Topicfinder", description: "AI topic and headline discovery tool", url: "", upvotes: 456, verified: true, rating: 4.4, icon: "🔍", category: "writing-editing", subcategory: "headlines-ai" },
      { id: "soopra", name: "Soopra", description: "AI content and headline generator", url: "", upvotes: 345, verified: true, rating: 4.3, icon: "🎯", category: "writing-editing", subcategory: "headlines-ai" },
      { id: "make-headline", name: "Make Headline", description: "AI headline creation tool", url: "", upvotes: 234, verified: true, rating: 4.2, icon: "📰", category: "writing-editing", subcategory: "headlines-ai" },
      { id: "chatgpt-news-desensationalizer", name: "ChatGPT News De-Sensationalizer", description: "AI tool to create balanced headlines", url: "", upvotes: 189, verified: true, rating: 4.1, icon: "📊", category: "writing-editing", subcategory: "headlines-ai" },
      { id: "great-headlines-ai", name: "Great Headlines AI", description: "AI headline optimization tool", url: "", upvotes: 156, verified: false, rating: 4.0, icon: "⭐", category: "writing-editing", subcategory: "headlines-ai" }
    ],
    "prompt-engineering": [
      { id: "prompthero", name: "PromptHero", description: "AI prompt engineering and sharing platform", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "🦸", category: "writing-editing", subcategory: "prompt-engineering" },
      { id: "flowgpt-engineering", name: "FlowGPT", description: "Prompt engineering community and tools", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🌊", category: "writing-editing", subcategory: "prompt-engineering" },
      { id: "learn-prompting", name: "Learn Prompting", description: "Educational platform for prompt engineering", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "📚", category: "writing-editing", subcategory: "prompt-engineering" },
      { id: "promptbase-engineering", name: "PromptBase", description: "Marketplace for prompt engineering", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🏪", category: "writing-editing", subcategory: "prompt-engineering" },
      { id: "god-of-prompt", name: "AI Prompt Generator by God of Prompt", description: "Advanced prompt generation tool", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "⚡", category: "writing-editing", subcategory: "prompt-engineering" }
    ],
    "resume-ai": [
      { id: "resume-worded", name: "Resume Worded", description: "AI resume optimization and feedback", url: "", upvotes: 1234, verified: true, rating: 4.7, icon: "📄", category: "writing-editing", subcategory: "resume-ai" },
      { id: "resumebuilder-com", name: "ResumeBuilder.com", description: "AI-powered resume builder", url: "", upvotes: 987, verified: true, rating: 4.6, icon: "🔧", category: "writing-editing", subcategory: "resume-ai" },
      { id: "careerflow-resume", name: "Careerflow", description: "AI career tools and resume optimization", url: "", upvotes: 789, verified: true, rating: 4.5, icon: "💼", category: "writing-editing", subcategory: "resume-ai" },
      { id: "vmock", name: "VMock", description: "AI resume analysis and improvement", url: "", upvotes: 567, verified: true, rating: 4.4, icon: "🎯", category: "writing-editing", subcategory: "resume-ai" },
      { id: "swooped", name: "Swooped", description: "AI job search and resume optimization", url: "", upvotes: 432, verified: false, rating: 4.3, icon: "🚀", category: "writing-editing", subcategory: "resume-ai" }
    ]
  }
};

export const getToolsBySubcategory = (category: string, subcategory: string): Tool[] => {
  return toolsData[category]?.[subcategory] || [];
};