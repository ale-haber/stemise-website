import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE_CONTENT_ROW_ID = 1;

const EMPTY_SITE_CONTENT_PAYLOAD = {
  events: [],
  impact_metrics: [],
  impact_countries: [],
  kits: [],
  workshops: [],
  supporters: [],
  home_professionals: [],
  team_members: [],
  curriculum_age_groups: [],
  curriculum_pages: [],
};

const canonicalizePayload = (value) => {
  if (Array.isArray(value)) {
    return value.map(canonicalizePayload);
  }

  if (value && typeof value === "object") {
    return Object.keys(value)
      .sort()
      .reduce((nextValue, key) => {
        nextValue[key] = canonicalizePayload(value[key]);
        return nextValue;
      }, {});
  }

  return value;
};

const parseEnvFile = (filePath) => {
  if (!existsSync(filePath)) {
    return {};
  }

  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .reduce((envMap, line) => {
      const trimmedLine = line.trim();
      if (!trimmedLine || trimmedLine.startsWith("#")) {
        return envMap;
      }

      const separatorIndex = trimmedLine.indexOf("=");
      if (separatorIndex <= 0) {
        return envMap;
      }

      const key = trimmedLine.slice(0, separatorIndex).trim();
      let value = trimmedLine.slice(separatorIndex + 1).trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      envMap[key] = value;
      return envMap;
    }, {});
};

const envFiles = [
  resolve(".env"),
  resolve(".env.local"),
  resolve(".env.production"),
  resolve(".env.production.local"),
].map(parseEnvFile);

const resolveEnvValue = (key) => {
  if (process.env[key]) {
    return process.env[key];
  }

  for (const envMap of envFiles) {
    if (envMap[key]) {
      return envMap[key];
    }
  }

  return "";
};

export const getSiteContentSourceConfig = () => {
  const supabaseUrl = resolveEnvValue("VITE_SUPABASE_URL");
  const supabaseAnonKey = resolveEnvValue("VITE_SUPABASE_ANON_KEY");

  return {
    supabaseUrl,
    supabaseAnonKey,
    available: Boolean(supabaseUrl && supabaseAnonKey),
  };
};

export const getEmptySiteContentPayload = () =>
  JSON.parse(JSON.stringify(EMPTY_SITE_CONTENT_PAYLOAD));

export const fetchLiveSiteContentState = async () => {
  const { supabaseUrl, supabaseAnonKey, available } = getSiteContentSourceConfig();

  if (!available) {
    return {
      payload: getEmptySiteContentPayload(),
      updatedAt: null,
    };
  }

  const requestUrl = new URL("/rest/v1/site_content_state", supabaseUrl);
  requestUrl.searchParams.set("select", "payload,updated_at");
  requestUrl.searchParams.set("id", `eq.${SITE_CONTENT_ROW_ID}`);

  const response = await fetch(requestUrl, {
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch site content snapshot: ${response.status} ${response.statusText}`);
  }

  const rows = await response.json();
  const row = Array.isArray(rows) ? rows[0] : undefined;
  const payload = row?.payload;

  if (!payload || typeof payload !== "object") {
    throw new Error("Supabase returned an invalid site content payload.");
  }

  return {
    payload,
    updatedAt: typeof row?.updated_at === "string" ? row.updated_at : null,
  };
};

export const fetchLiveSiteContentPayload = async () => {
  const state = await fetchLiveSiteContentState();
  const payload = state.payload;

  const countries = [
    { label: "USA", mapNames: ["USA"] },
    { label: "South Korea", mapNames: ["South Korea"] },
    { label: "France", mapNames: ["France"] },
    { label: "Nigeria", mapNames: ["Nigeria"] },
    { label: "India", mapNames: ["India"] },
    { label: "Vietnam", mapNames: ["Vietnam"] },
    { label: "Canada", mapNames: ["Canada"] },
    { label: "UAE", mapNames: ["United Arab Emirates"] },
    { label: "Nepal", mapNames: ["Nepal"] },
    { label: "Kenya", mapNames: ["Kenya"] },
    { label: "China", mapNames: ["China"] },
    { label: "Malaysia", mapNames: ["Malaysia"] },
    { label: "Saudi Arabia", mapNames: ["Saudi Arabia"] },
    { label: "Pakistan", mapNames: ["Pakistan"] },
    { label: "Phillippines", mapNames: ["Philippines"] },
    { label: "Hong Kong", mapNames: ["China"] },
    { label: "Bangladesh", mapNames: ["Bangladesh"] },
    { label: "Portugal", mapNames: ["Portugal"] },
    { label: "Paraguay", mapNames: ["Paraguay"] },
    { label: "Germany", mapNames: ["Germany"] },
    { label: "Iraq", mapNames: ["Iraq"] },
    { label: "Australia", mapNames: ["Australia"] },
    { label: "South Africa", mapNames: ["South Africa"] },
    { label: "Egypt", mapNames: ["Egypt"] },
    { label: "Romania", mapNames: ["Romania"] },
    { label: "Brazil", mapNames: ["Brazil"] },
    { label: "Singapore", mapNames: ["Singapore"] },
    { label: "Senegal", mapNames: ["Senegal"] },
    { label: "Dominican Republic", mapNames: ["Dominican Rep."] },
    { label: "Burma", mapNames: ["Myanmar"] },
    { label: "Thailand", mapNames: ["Thailand"] },
    { label: "Uzbekistan", mapNames: ["Uzbekistan"] },
    { label: "United Kingdom", mapNames: ["England"] },
    { label: "Iran", mapNames: ["Iran"] },
    { label: "Turkey", mapNames: ["Turkey"] },
    { label: "Argentina", mapNames: ["Argentina"] },
    { label: "Morocco", mapNames: ["Morocco"] },
    { label: "Ukraine", mapNames: ["Ukraine"] },
    { label: "Mexico", mapNames: ["Mexico"] },
    { label: "Kazakhstan", mapNames: ["Kazakhstan"] },
    { label: "Malawi", mapNames: ["Malawi"] },
    { label: "Latvia", mapNames: ["Latvia"] },
    { label: "Japan", mapNames: ["Japan"] },
    { label: "Malta", mapNames: ["Malta"] },
    { label: "Iceland", mapNames: ["Iceland"] },
    { label: "Ethiopia", mapNames: ["Ethiopia"] },
    { label: "Peru", mapNames: ["Peru"] },
    { label: "Cameroon", mapNames: ["Cameroon"] },
    { label: "Namibia", mapNames: ["Namibia"] },
    { label: "Indonesia", mapNames: ["Indonesia"] },
    { label: "Algeria", mapNames: ["Algeria"] },
    { label: "Tunisia", mapNames: ["Tunisia"] },
    { label: "Ghana", mapNames: ["Ghana"] },
    { label: "Greece", mapNames: ["Greece"] },
    { label: "Sri Lanka", mapNames: ["Sri Lanka"] },
    { label: "Italy", mapNames: ["Italy"] },
    { label: "Colombia", mapNames: ["Colombia"] },
    { label: "Benin", mapNames: ["Benin"] },
    { label: "Cambodia", mapNames: ["Cambodia"] },
    { label: "Mongolia", mapNames: ["Mongolia"] },
    { label: "Laos", mapNames: ["Laos"] },
    { label: "Israel", mapNames: ["Israel"] },
    { label: "Syria", mapNames: ["Syria"] },
    { label: "Serbia", mapNames: ["Serbia"] },
    { label: "Bosnia and Herzegovina", mapNames: ["Bosnia and Herz."] },
    { label: "Cyprus", mapNames: ["Cyprus"] },
    { label: "Estonia", mapNames: ["Estonia"] },
    { label: "Ireland", mapNames: ["Ireland"] },
    { label: "Northern Ireland", mapNames: ["Northern Ireland"] },
    { label: "Ecuador", mapNames: ["Ecuador"] },
    { label: "Panama", mapNames: ["Panama"] },
    { label: "Lebanon", mapNames: ["Lebanon"] },
    { label: "Chile", mapNames: ["Chile"] },
    { label: "Qatar", mapNames: ["Qatar"] },
    { label: "Armenia", mapNames: ["Armenia"] },
    { label: "Montenegro", mapNames: ["Montenegro"] },
    { label: "Liberia", mapNames: ["Liberia"] },
    { label: "Netherland", mapNames: ["Netherlands"] },
    { label: "Lithuania", mapNames: ["Lithuania"] }
  ];

  if (payload) {
    payload.impact_countries = countries;

    if (Array.isArray(payload.impact_metrics)) {
      payload.impact_metrics = payload.impact_metrics.map((metric) => {
        if (metric.label && metric.label.trim().toLowerCase() === "countries") {
          return { ...metric, value: countries.length };
        }
        return metric;
      });
    }

    if (Array.isArray(payload.supporters)) {
      const hasStocable = payload.supporters.some((s) => s.id === "supporter-stocable");
      if (!hasStocable) {
        payload.supporters.push({
          id: "supporter-stocable",
          src: "",
          href: "https://stocable.vercel.app/",
          name: "Stocable",
        });
      }
      const hasFinsions = payload.supporters.some((s) => s.id === "supporter-finsions");
      if (!hasFinsions) {
        payload.supporters.push({
          id: "supporter-finsions",
          src: "",
          href: "https://finsions.org/",
          name: "Finsions",
        });
      }
    }
  }

  return payload;
};

export const hashSiteContentPayload = async (payload) => {
  const { createHash } = await import("node:crypto");
  return createHash("sha256").update(JSON.stringify(canonicalizePayload(payload))).digest("hex");
};
