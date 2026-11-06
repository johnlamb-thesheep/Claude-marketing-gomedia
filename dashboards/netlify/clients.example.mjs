// Template for netlify/clients.mjs (the real file is gitignored: its codes open private client data).
// Copy to clients.mjs and add one line per client. Key = random 12-char code used in /c/<code>.
//   accountIds      Meta ad account IDs (numbers only). Several = combined on one dashboard.
//   campaignFilter  null = GoMedia-run campaigns only (GOMEDIA_NAMES in lib/meta.mjs);
//                   ["agent name"] for agents inside GoMedia's own ad account
//   countChats      false = count form leads only (default: forms + chats)
//   sheetRow        row in AdGen Tracker > Stage 2 - Activation, for writing the link back

export const CLIENTS = {
  "AbCdEf123456": { name: "Example Agent", agentId: null, accountIds: ["1234567890"], accountName: "Example", campaignFilter: null, sheetRow: 0 },
};
