import { EuiButton, EuiPageSection, EuiPageTemplate, EuiProvider } from "@elastic/eui";
import FindUser from "./FindUser";
import { useApp } from "./AppContext";

function EuiRootComponent() {
  const { isDark, toggleDarkMode } = useApp();
  const header = ["header"];
  const emptyPrompt = "is empty"

  return (
    <EuiProvider colorMode={isDark ? "dark" : "light"}>
      <EuiPageTemplate bottomBorder="extended">
        {/* Sidebar content can now be instantiated anywhere and it will always be placed in the correct spot */}
        <EuiPageTemplate.Sidebar>x</EuiPageTemplate.Sidebar>
        {/* This non-namespaced section will not be tied to the template ensuring it's display is always custom */}
        <EuiPageSection color="subdued">
          Some content before the page header
        </EuiPageSection>
        {/* Display a page header anywhere in the stack of contents */}
        {/* <EuiPageTemplate.Header {...header} /> */}
        {/* This template section overrides some default template props */}
        <EuiPageTemplate.Section grow={false} bottomBorder="extended">
        <FindUser />
        </EuiPageTemplate.Section>
        {/* Empty prompts can be placed anywhere in the stack and not replace the entire page contents */}
        <EuiPageTemplate.EmptyPrompt title={<span>No spice</span>}>
          {emptyPrompt}
        </EuiPageTemplate.EmptyPrompt>
      </EuiPageTemplate>

      <EuiPageTemplate>
        <div className="App">
          <FindUser />

          <EuiButton onClick={toggleDarkMode}>Toggle Theme</EuiButton>
        </div>
      </EuiPageTemplate>
    </EuiProvider>
  );
}

export default EuiRootComponent;
