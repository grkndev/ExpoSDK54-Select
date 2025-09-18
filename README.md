# React Native Select Component Demo

A modern React Native demo application showcasing a cross-platform Select component implementation using `@rn-primitives/select` with Expo SDK 54, NativeWind styling, and full accessibility support.

## ✨ Features

- 🎯 **Cross-platform Select Component** - Works seamlessly on iOS, Android, and Web
- 🎨 **Modern UI Design** - Styled with NativeWind (Tailwind CSS for React Native)
- ♿ **Accessibility First** - Full accessibility support with proper ARIA attributes
- 📱 **Mobile Optimized** - Custom touch handling for better mobile experience
- 🌙 **Dark Mode Support** - Automatic theme switching based on system preferences
- ⚡ **Expo SDK 54** - Latest Expo features with New Architecture enabled
- 🔧 **TypeScript** - Full type safety throughout the application

## 🎬 Demo

### Screen Recording
<!-- Buraya ekran kaydı videosu eklenecek -->
*Screen recording will be added here*

### Screenshots
<!-- Buraya ekran görüntüleri eklenecek -->
*Screenshots will be added here*

## 🏗️ Technical Stack

- **React Native** 0.81.4 with New Architecture
- **Expo SDK** 54.0.8 with Expo Router for navigation
- **@rn-primitives/select** - Unstyled, accessible select primitives
- **NativeWind** 4.2.1 - Tailwind CSS for React Native
- **Lucide React Native** - Modern icon library
- **TypeScript** - Type-safe development

## 📁 Project Structure

```
src/
├── app/                    # Expo Router pages
│   ├── (tabs)/
│   │   ├── index.tsx      # Main demo page
│   │   └── explore.tsx    # Additional tab
│   └── _layout.tsx        # Root layout
├── components/
│   ├── SelectPreview.tsx  # Main select demo component
│   └── ui/               # Reusable UI components
│       ├── select.tsx    # Styled select primitives
│       ├── text.tsx      # Text components
│       └── icon.tsx      # Icon components
├── lib/
│   ├── utils.ts          # Utility functions
│   └── theme.ts          # Theme configuration
└── hooks/                # Custom hooks
    ├── use-color-scheme.ts
    └── use-theme-color.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn
- iOS Simulator (for iOS development)
- Android Studio and Android Emulator (for Android development)

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd sdk54-select
   npm install
   ```

2. **Start the development server**
   ```bash
   npx expo start
   ```

3. **Run on different platforms**
   ```bash
   # iOS Simulator
   npx expo run:ios
   
   # Android Emulator  
   npx expo run:android
   
   # Web browser
   npx expo start --web
   ```

## 💻 Usage

### Basic Select Component

```tsx
import { SelectPreview } from '@/components/SelectPreview';
import type { Option } from '@rn-primitives/select';

export default function MyScreen() {
  const [selected, setSelected] = useState<Option | undefined>();

  return (
    <View>
      <SelectPreview onSelect={setSelected} />
      <Text>Selected: {selected?.label}</Text>
    </View>
  );
}
```

### Custom Select Implementation

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
];

function CustomSelect() {
  return (
    <Select onValueChange={(option) => console.log(option)}>
      <SelectTrigger>
        <SelectValue placeholder="Choose fruit" />
      </SelectTrigger>
      <SelectContent>
        {fruits.map((fruit) => (
          <SelectItem key={fruit.value} value={fruit.value}>
            {fruit.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
```

## 🔧 Implementation Details

### Mobile Touch Workaround

Due to a known issue with `@rn-primitives/select` on mobile platforms, we've implemented a custom touch handler:

```tsx
function SelectPreview() {
  const ref = useRef<TriggerRef>(null);
  
  // Workaround for mobile select not opening
  function onTouchStart() {
    ref.current?.open();
  }

  return (
    <SelectTrigger ref={ref} onPress={onTouchStart}>
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
  );
}
```

### Safe Area Handling

The component includes proper safe area insets for different platforms:

```tsx
const contentInsets = {
  top: insets.top,
  bottom: Platform.select({ 
    ios: insets.bottom, 
    android: insets.bottom + 24 
  }),
  left: 12,
  right: 12,
};
```

## 📦 Key Dependencies

- **@rn-primitives/select** - Provides unstyled, accessible select primitives
- **@rn-primitives/portal** - Portal functionality for overlays
- **class-variance-authority** - CSS-in-JS variant API
- **clsx** & **tailwind-merge** - Conditional class name utilities
- **lucide-react-native** - Beautiful & consistent icon library
- **react-native-reanimated** - Smooth animations
- **react-native-safe-area-context** - Safe area handling

## 🧪 Testing

### Platform Testing

**iOS Simulator:**
```bash
npx expo run:ios
```

**Android Emulator:**
```bash
npx expo run:android
```

**Web Browser:**
```bash
npx expo start --web
```

### Features to Test

- [ ] Select dropdown opens on all platforms
- [ ] Touch interactions work properly on mobile
- [ ] Keyboard navigation works on web
- [ ] Dark/light mode switching
- [ ] Accessibility with screen readers
- [ ] Safe area handling on notched devices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev) for the amazing React Native framework
- [@rn-primitives](https://github.com/roninoss/rn-primitives) for the accessible primitives
- [NativeWind](https://nativewind.dev) for bringing Tailwind CSS to React Native
- [Lucide](https://lucide.dev) for the beautiful icons

---

Built with ❤️ using React Native and Expo