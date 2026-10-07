import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import pkg from '../package.json';

import ThemeProvider from 'corelabui/ThemeProvider';
import {
    defaultTheme,
    winterTheme,
    springTheme,
    summerTheme,
    fallTheme,
    darkTheme
} from 'corelabui/Theme';

import Button from 'corelabui/Button';
import Input from 'corelabui/Input';
import Textarea from 'corelabui/Textarea';
import Select from 'corelabui/Select';
import Checkbox from 'corelabui/Checkbox';
import RadioButton from 'corelabui/RadioButton';
import Flex, { FlexItem } from 'corelabui/Flex';
import Grid, { GridItem } from 'corelabui/Grid';
import Typography from 'corelabui/Typography';
import Divider from 'corelabui/Divider';
import Tag from 'corelabui/Tag';
import Card from 'corelabui/Card';
import Table from 'corelabui/Table';
import Breadcrumb from 'corelabui/Breadcrumb';
import Quote from 'corelabui/Quote';
import Highlight from 'corelabui/Highlight';
import Link from 'corelabui/Link';
import Dropdown from 'corelabui/Dropdown';
import Popup, { PopupActions } from 'corelabui/Popup';
import Tabs, { TabContent } from 'corelabui/Tabs';
import Navigation from 'corelabui/Navigation';
import TableOfContents from 'corelabui/TableOfContents';
import Scrollable from 'corelabui/Scrollable';

const THEMES = [
    { name: 'Default', value: defaultTheme },
    { name: 'Winter', value: winterTheme },
    { name: 'Spring', value: springTheme },
    { name: 'Summer', value: summerTheme },
    { name: 'Fall', value: fallTheme },
    { name: 'Dark', value: darkTheme }
];

const SECTIONS = [
    { id: 'buttons', title: 'Buttons' },
    { id: 'typography', title: 'Typography' },
    { id: 'forms', title: 'Forms' },
    { id: 'layout', title: 'Layout' },
    { id: 'data', title: 'Data display' },
    { id: 'navigation', title: 'Navigation' },
    { id: 'overlays', title: 'Overlays' }
];

const COVER_IMAGE =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="300" viewBox="0 0 640 300">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#393053"/>
                    <stop offset="1" stop-color="#7c3aed"/>
                </linearGradient>
            </defs>
            <rect width="640" height="300" fill="url(#g)"/>
            <circle cx="520" cy="70" r="130" fill="#ffffff" fill-opacity="0.10"/>
            <circle cx="130" cy="270" r="110" fill="#ffffff" fill-opacity="0.08"/>
            <rect x="60" y="90" width="240" height="18" rx="9" fill="#ffffff" fill-opacity="0.55"/>
            <rect x="60" y="130" width="160" height="12" rx="6" fill="#ffffff" fill-opacity="0.35"/>
        </svg>`
    );

const Code = ({ children }) => (
    <pre className="demo-code">
        <code>{children}</code>
    </pre>
);

const Panel = ({ label, children }) => (
    <div className="demo-panel">
        {label && <span className="demo-panel-label">{label}</span>}
        {children}
    </div>
);

const Section = ({ id, title, description, children }) => (
    <section className="demo-section" id={id}>
        <div className="demo-section-head">
            <Typography variant="heading4" margin={false}>
                {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
        </div>
        <div className="demo-section-body">{children}</div>
    </section>
);

const App = () => {
    const [themeIndex, setThemeIndex] = useState(0);
    const [activeSection, setActiveSection] = useState('buttons');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('sofia');
    const [bio, setBio] = useState('');
    const [subscribed, setSubscribed] = useState(true);
    const [plan, setPlan] = useState('pro');
    const [loading, setLoading] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [tab, setTab] = useState(0);

    const scrollTo = (id) => {
        setActiveSection(id);
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <ThemeProvider theme={THEMES[themeIndex].value}>
            <header className="demo-topbar">
                <a className="demo-brand" href="#intro">
                    <span className="demo-brand-mark">C</span>
                    Corelab UI
                    <span className="demo-version">v{pkg.version}</span>
                </a>
                <div className="demo-topbar-actions">
                    <div className="demo-themes" role="group" aria-label="Theme">
                        {THEMES.map((theme, index) => (
                            <button
                                key={theme.name}
                                type="button"
                                className={`demo-theme${
                                    index === themeIndex ? ' is-active' : ''
                                }`}
                                onClick={() => setThemeIndex(index)}
                                aria-pressed={index === themeIndex}>
                                <span
                                    className="demo-theme-swatch"
                                    style={{
                                        background: theme.value.primary
                                    }}
                                />
                                {theme.name}
                            </button>
                        ))}
                    </div>
                    <a
                        className="demo-github"
                        href="https://github.com/mitevskasara/corelabui"
                        target="_blank"
                        rel="noreferrer">
                        GitHub
                    </a>
                </div>
            </header>

            <div className="demo-shell">
                <aside className="demo-sidebar">
                    <TableOfContents
                        title="On this page"
                        items={SECTIONS.map((section) => ({
                            title: section.title,
                            anchor: `#${section.id}`,
                            active: activeSection === section.id,
                            onClick: (event) => {
                                event.preventDefault();
                                scrollTo(section.id);
                            }
                        }))}
                    />
                </aside>

                <main className="demo-main">
                    <section className="demo-hero" id="intro">
                        <Flex gap="0.5" mb="1">
                            <Tag text="React 18+" color="var(--primary)" />
                            <Tag text="MIT licensed" color="var(--success)" />
                            <Tag text="No CSS imports" color="var(--info)" />
                        </Flex>
                        <Typography variant="heading2">
                            Ready-to-use components,{' '}
                            <Highlight gradient={{ colors: 'var(--primary), #7c3aed' }}>
                                beautifully themed
                            </Highlight>
                        </Typography>
                        <Typography variant="subtitle1" color="var(--text-secondary)">
                            Corelab UI is a collection of customisable React
                            components that ships its styles with the code —
                            install it, import a component and start building.
                            Switch themes from the toolbar above to see every
                            component restyle instantly.
                        </Typography>
                        <Flex gap="1" mt="1.5" wrap="wrap">
                            <Button onClick={() => scrollTo('buttons')}>
                                Explore components
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() =>
                                    window.open(
                                        'https://www.npmjs.com/package/corelabui',
                                        '_blank'
                                    )
                                }>
                                View on npm
                            </Button>
                        </Flex>
                        <div style={{ marginTop: '2em' }}>
                            <Code>npm install corelabui</Code>
                        </div>
                    </section>

                    <Section
                        id="buttons"
                        title="Buttons"
                        description="Three variants, three sizes, a loading state and full-width mode.">
                        <Panel label="Variants">
                            <div className="demo-row">
                                <Button>Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="text">Text</Button>
                                <Button disabled>Disabled</Button>
                            </div>
                        </Panel>
                        <Panel label="Sizes and states">
                            <div className="demo-row">
                                <Button size="small">Small</Button>
                                <Button size="medium">Medium</Button>
                                <Button size="large">Large</Button>
                                <Button loading>Loading</Button>
                                <Button
                                    loading={loading}
                                    onClick={() => {
                                        setLoading(true);
                                        setTimeout(() => setLoading(false), 1500);
                                    }}>
                                    {loading ? 'Working…' : 'Click to load'}
                                </Button>
                            </div>
                        </Panel>
                        <Code>{`import Button from 'corelabui/Button';

<Button variant="secondary" size="large" loading={busy}>
  Save changes
</Button>`}</Code>
                    </Section>

                    <Section
                        id="typography"
                        title="Typography"
                        description="Semantic text variants, gradients, quotes and links — all driven by theme tokens.">
                        <Panel label="Variants">
                            <Typography variant="heading3" margin={false}>
                                heading3 — The quick brown fox
                            </Typography>
                            <Typography variant="heading5" margin={false}>
                                heading5 — The quick brown fox
                            </Typography>
                            <Typography variant="subtitle1" margin={false}>
                                subtitle1 — jumps over the lazy dog
                            </Typography>
                            <Typography variant="subtitle2" margin={false}>
                                subtitle2 — jumps over the lazy dog
                            </Typography>
                            <Typography variant="body1" margin={false}>
                                body1 — Corelab UI components read their colors,
                                spacing and typography from CSS custom
                                properties.
                            </Typography>
                            <Typography variant="body2" margin={false}>
                                body2 — Changing the theme restyles everything at
                                once.
                            </Typography>
                            <Typography variant="caption" margin={false}>
                                caption — small print, hints and metadata
                            </Typography>
                        </Panel>
                        <Panel label="Highlight, quote and link">
                            <Typography variant="body1" margin={false}>
                                Use{' '}
                                <Highlight color="var(--primary)">
                                    a colored word
                                </Highlight>
                                ,{' '}
                                <Highlight
                                    background="var(--secondary)">
                                    a background
                                </Highlight>{' '}
                                or{' '}
                                <Highlight
                                    textGradient={{
                                        colors: 'var(--primary), #7c3aed, #f1580c'
                                    }}>
                                    a gradient text
                                </Highlight>
                                .
                            </Typography>
                            <Quote cite="Ada Lovelace, 1843">
                                The Analytical Engine weaves algebraic patterns
                                just as the Jacquard loom weaves flowers and
                                leaves.
                            </Quote>
                            <div className="demo-row">
                                <Link href="#typography">Medium link</Link>
                                <Link href="#typography" size="small">
                                    Small link
                                </Link>
                                <Link href="#typography" color="#f1580c">
                                    Colored link
                                </Link>
                                <Link href="#typography" disabled>
                                    Disabled link
                                </Link>
                            </div>
                        </Panel>
                        <Code>{`import Typography from 'corelabui/Typography';
import Highlight from 'corelabui/Highlight';

<Typography variant="heading3">Hello</Typography>
<Highlight textGradient={{ colors: '#393053, #7c3aed' }}>
  gradient text
</Highlight>`}</Code>
                    </Section>

                    <Section
                        id="forms"
                        title="Forms"
                        description="Inputs, textareas, selects, checkboxes and radios with labels, helper text and validation states.">
                        <Panel label="Fields">
                            <div className="demo-row">
                                <div style={{ minWidth: '220px' }}>
                                    <Input
                                        name="email"
                                        type="email"
                                        label="Email address"
                                        placeholder="you@example.com"
                                        helperText="We never share your email."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div style={{ minWidth: '220px' }}>
                                    <Input
                                        name="username"
                                        label="Username"
                                        value="mitevskasara"
                                        error
                                        helperText="This username is already taken."
                                    />
                                </div>
                                <div style={{ minWidth: '220px' }}>
                                    <Input
                                        name="readonly"
                                        label="Read only"
                                        value="Disabled field"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="demo-row" style={{ alignItems: 'flex-start' }}>
                                <div style={{ minWidth: '260px' }}>
                                    <Select
                                        name="city"
                                        label="City"
                                        helperText="Select receives the whole option object."
                                        value={city}
                                        options={[
                                            { label: 'Sofia', value: 'sofia' },
                                            { label: 'Plovdiv', value: 'plovdiv' },
                                            { label: 'Varna', value: 'varna' },
                                            {
                                                label: 'Berlin (disabled)',
                                                value: 'berlin',
                                                disabled: true
                                            }
                                        ]}
                                        onChange={(option) => setCity(option.value)}
                                    />
                                </div>
                                <div style={{ flex: 1, minWidth: '260px' }}>
                                    <Textarea
                                        name="bio"
                                        label="Bio"
                                        placeholder="Tell us something about yourself…"
                                        value={bio}
                                        onChange={(e) => setBio(e.target.value)}
                                    />
                                </div>
                            </div>
                        </Panel>
                        <Panel label="Selection controls">
                            <div className="demo-row">
                                <Checkbox
                                    label="Standard"
                                    checked={subscribed}
                                    onChange={(e) => setSubscribed(e.target.checked)}
                                />
                                <Checkbox
                                    label="Rounded"
                                    variant="rounded"
                                    checked={subscribed}
                                    onChange={(e) => setSubscribed(e.target.checked)}
                                />
                                <Checkbox label="Disabled" disabled />
                                <Checkbox label="Checked disabled" disabled checked />
                            </div>
                            <div className="demo-row">
                                {[
                                    { id: 'free', label: 'Free plan' },
                                    { id: 'pro', label: 'Pro plan' },
                                    { id: 'team', label: 'Team plan' }
                                ].map((option) => (
                                    <RadioButton
                                        key={option.id}
                                        label={option.label}
                                        name="plan"
                                        checked={plan === option.id}
                                        onChange={() => setPlan(option.id)}
                                    />
                                ))}
                                <RadioButton label="Disabled" disabled />
                            </div>
                        </Panel>
                        <Code>{`import Input from 'corelabui/Input';
import Select from 'corelabui/Select';

<Input
  label="Email"
  error={!valid}
  helperText="Enter a valid address"
/>

<Select
  value={city}
  options={options}
  onChange={(option) => setCity(option.value)}
/>`}</Code>
                    </Section>

                    <Section
                        id="layout"
                        title="Layout"
                        description="Flex and grid primitives with responsive helpers — no extra CSS files to import.">
                        <Panel label="Flex">
                            <Flex justifyContent="space-between" gap="1" wrap="wrap">
                                <FlexItem flex="1">
                                    <div className="demo-box">flex: 1</div>
                                </FlexItem>
                                <FlexItem flex="2">
                                    <div className="demo-box">flex: 2</div>
                                </FlexItem>
                                <FlexItem flex="1">
                                    <div className="demo-box">flex: 1</div>
                                </FlexItem>
                            </Flex>
                        </Panel>
                        <Panel label="Grid (12 columns)">
                            <Grid rowGap={2} columnGap={2}>
                                <GridItem col={6}>
                                    <div className="demo-box">col: 6</div>
                                </GridItem>
                                <GridItem col={6}>
                                    <div className="demo-box">col: 6</div>
                                </GridItem>
                                <GridItem col={4}>
                                    <div className="demo-box">col: 4</div>
                                </GridItem>
                                <GridItem col={4}>
                                    <div className="demo-box">col: 4</div>
                                </GridItem>
                                <GridItem col={4}>
                                    <div className="demo-box">col: 4</div>
                                </GridItem>
                            </Grid>
                        </Panel>
                        <Code>{`import Flex from 'corelabui/Flex';
import Grid, { GridItem } from 'corelabui/Grid';

<Grid rowGap={2} columnGap={2}>
  <GridItem col={6}>Half</GridItem>
  <GridItem col={6}>Half</GridItem>
</Grid>`}</Code>
                    </Section>

                    <Section
                        id="data"
                        title="Data display"
                        description="Cards, tables, tags, breadcrumbs and dividers for presenting content.">
                        <Panel label="Cards">
                            <Grid rowGap={2} columnGap={2}>
                                <GridItem col={4}>
                                    <Card
                                        title="Design system"
                                        description="A shared language between designers and developers, covering tokens, components and patterns."
                                        image={COVER_IMAGE}
                                        tags={[
                                            { text: 'Design', color: '#7c3aed' },
                                            { text: 'Tokens', color: '#023E8A' }
                                        ]}
                                    />
                                </GridItem>
                                <GridItem col={4}>
                                    <Card
                                        title="Dashboard kit"
                                        description="Charts, tables and navigation blocks for internal tools. Click this card — it is clickable."
                                        image={COVER_IMAGE}
                                        clickable
                                        onClick={() =>
                                            alert('Card clicked!')
                                        }
                                        tags={[{ text: 'Dashboard', color: '#40916c' }]}
                                    />
                                </GridItem>
                                <GridItem col={4}>
                                    <Card
                                        title="No image card"
                                        description="Cards adapt to their content: the image is optional and the layout stays balanced."
                                        tags={[
                                            { text: 'Optional', color: '#F1580C' }
                                        ]}
                                    />
                                </GridItem>
                            </Grid>
                        </Panel>
                        <Panel label="Table">
                            <Table
                                headers={['Invoice', 'Customer', 'Status', 'Total']}
                                striped
                                data={[
                                    {
                                        id: 'INV-001',
                                        customer: 'Ada Lovelace',
                                        status: 'Paid',
                                        total: '$1,200.00'
                                    },
                                    {
                                        id: 'INV-002',
                                        customer: 'Alan Turing',
                                        status: 'Pending',
                                        total: '$860.00'
                                    },
                                    {
                                        id: 'INV-003',
                                        customer: 'Grace Hopper',
                                        status: 'Paid',
                                        total: '$2,340.00'
                                    },
                                    {
                                        id: 'INV-004',
                                        customer: 'Katherine Johnson',
                                        status: 'Overdue',
                                        total: '$540.00'
                                    }
                                ]}
                            />
                        </Panel>
                        <Panel label="Tags, breadcrumb and divider">
                            <div className="demo-row">
                                <Tag text="Outlined" color="var(--primary)" />
                                <Tag text="Success" color="var(--success)" />
                                <Tag text="Warning" color="var(--warning)" />
                                <Tag text="Error" color="var(--error)" />
                                <Tag text="Info" color="var(--info)" />
                            </div>
                            <Breadcrumb
                                items={[
                                    { title: 'Home', link: '#intro' },
                                    { title: 'Library', link: '#data' },
                                    { title: 'Components', active: true }
                                ]}
                            />
                            <Divider text="Section divider" />
                        </Panel>
                        <Code>{`import Table from 'corelabui/Table';

<Table
  headers={['Invoice', 'Customer', 'Total']}
  striped
  data={rows}
/>`}</Code>
                    </Section>

                    <Section
                        id="navigation"
                        title="Navigation"
                        description="Sidebar navigation, scrollable areas and breadcrumbs keep long pages usable.">
                        <div className="demo-row" style={{ alignItems: 'flex-start' }}>
                            <div style={{ width: '260px' }}>
                                <Navigation
                                    border="right"
                                    padding="0.2em 1em"
                                    items={[
                                        { title: 'Dashboard', active: true },
                                        {
                                            title: 'Projects',
                                            divider: true,
                                            badge: (
                                                <Tag
                                                    text="3"
                                                    color="var(--primary)"
                                                />
                                            ),
                                            items: [
                                                { title: 'Website redesign' },
                                                { title: 'Mobile app' },
                                                { title: 'Design system' }
                                            ]
                                        },
                                        {
                                            title: 'Reports',
                                            divider: true,
                                            items: [{ title: 'Quarterly' }]
                                        },
                                        { title: 'Archived', disabled: true }
                                    ]}
                                />
                            </div>
                            <div style={{ flex: 1, minWidth: '280px' }}>
                                <Scrollable
                                    style={{
                                        height: '230px',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: 'var(--border-radius)',
                                        padding: '0 1em'
                                    }}>
                                    {Array.from({ length: 24 }, (_, index) => (
                                        <Typography
                                            key={index}
                                            variant="body2"
                                            margin={false}>
                                            Scrollable row {index + 1} — scrollbars
                                            appear when you hover this box.
                                        </Typography>
                                    ))}
                                </Scrollable>
                            </div>
                        </div>
                        <Code>{`import Navigation from 'corelabui/Navigation';
import Scrollable from 'corelabui/Scrollable';

<Navigation border="right" items={items} />`}</Code>
                    </Section>

                    <Section
                        id="overlays"
                        title="Overlays"
                        description="Modals, dropdowns and tabs with keyboard support, all controlled with plain React state.">
                        <Panel label="Popup">
                            <div className="demo-row">
                                <Button onClick={() => setPopupOpen(true)}>
                                    Open popup
                                </Button>
                                <Dropdown
                                    trigger="click"
                                    buttonProps={{
                                        children: 'Open dropdown',
                                        variant: 'secondary'
                                    }}>
                                    <Flex direction="column" gap="0.5">
                                        <Link href="#overlays">Account settings</Link>
                                        <Link href="#overlays">Billing</Link>
                                        <Link href="#overlays">Sign out</Link>
                                    </Flex>
                                </Dropdown>
                            </div>
                            <Popup
                                isOpen={popupOpen}
                                close={() => setPopupOpen(false)}
                                width="min(480px, 90vw)">
                                <Typography variant="heading5">
                                    Confirm subscription
                                </Typography>
                                <Typography variant="body2">
                                    This popup is a controlled component — it
                                    stays open while <code>isOpen</code> is true
                                    and closes on backdrop click, the close icon
                                    or the Escape key.
                                </Typography>
                                <PopupActions
                                    actions={[
                                        {
                                            children: 'Cancel',
                                            variant: 'text',
                                            onClick: () => setPopupOpen(false)
                                        },
                                        {
                                            children: 'Confirm',
                                            onClick: () => setPopupOpen(false)
                                        }
                                    ]}
                                />
                            </Popup>
                        </Panel>
                        <Panel label="Tabs">
                            <Tabs
                                items={[
                                    { title: 'Overview' },
                                    { title: 'Usage' },
                                    { title: 'Theming' }
                                ]}
                                active={tab}
                                onChange={(event, index) => setTab(index)}
                            />
                            <TabContent active={tab} index={0}>
                                <Typography variant="body2" margin={false}>
                                    Tabs are fully keyboard accessible — use the
                                    arrow keys to move between tabs.
                                </Typography>
                            </TabContent>
                            <TabContent active={tab} index={1}>
                                <Typography variant="body2" margin={false}>
                                    Pass an <code>items</code> array, keep{' '}
                                    <code>active</code> in state and update it
                                    from <code>onChange(event, index)</code>.
                                </Typography>
                            </TabContent>
                            <TabContent active={tab} index={2}>
                                <Typography variant="body2" margin={false}>
                                    Active tab colors, borders and typography all
                                    come from the current theme tokens.
                                </Typography>
                            </TabContent>
                        </Panel>
                        <Code>{`import Popup, { PopupActions } from 'corelabui/Popup';
import Tabs, { TabContent } from 'corelabui/Tabs';

<Popup isOpen={open} close={() => setOpen(false)}>
  …content…
</Popup>`}</Code>
                    </Section>
                </main>
            </div>

            <footer className="demo-footer">
                <span>
                    Corelab UI v{pkg.version} — MIT License, built with React.
                </span>
                <span>
                    <Link
                        href="https://github.com/mitevskasara/corelabui"
                        target="_blank"
                        rel="noreferrer"
                        size="small">
                        Source on GitHub
                    </Link>
                </span>
            </footer>
        </ThemeProvider>
    );
};

createRoot(document.getElementById('root')).render(<App />);
