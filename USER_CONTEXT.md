# CPT Calculator - User Context

## Project Overview
Create a CPT (Cost Per Thousand) Calculator demo web application for media and advertisers. This desktop web app will be used for demo and training purposes.

## Reference UI Design
- Location: /home/user/attachments/screen.png
- The design shows a dark-themed calculator interface with:
  - Header with calculator icon and title
  - Two input fields (Total Campaign Cost and Total Impressions)
  - Calculate and Reset buttons (blue primary button, gray secondary)
  - Result display showing the calculated CPT
  - Educational section explaining "What is CPT?" and "The Formula"

## CPT Concept and Formula

### What is CPT?
CPT, or Cost Per Thousand, is a common metric in advertising used to measure the cost of an advertising campaign for every one thousand views or impressions on a particular advertisement. It's a key indicator for comparing the relative cost-effectiveness of different advertising opportunities.

### The Main Formula
**CPT = (Total Cost / Total Impressions) × 1000**

This is the core formula for calculating Cost Per Thousand impressions.

### Key Terminology from Thinkbox.tv:
1. **TVR (Television Rating)**: The measure of the popularity of a programme, daypart, commercial break or advertisement by comparing its audience to the population as a whole. One TVR is numerically equivalent to one per cent of a target audience.

2. **CPT (Cost-Per-Thousand)**: The cost of one thousand commercial impacts for a target audience. Used when purchasing and measuring the efficiency of advertising campaigns.

3. **Universe**: The total population of a particular audience category. BARB universes are based on television homes.

### Related Formulas from Thinkbox (for reference/educational purposes):

1. **How many Television Ratings (TVRs) can I buy?**
   - Ratings = Budget ÷ CPT ÷ Universe × 100,000
   - Example: £500,000 ÷ £6.20 ÷ 48m × 100,000 = 168 TVRs

2. **How much will it cost?**
   - Cost = TVRs × CPT × Universe ÷ 100,000
   - Example: 400 TVRs × £6.20 × 48,000,000 ÷ 100,000 = £1,190,400

3. **What is the CPT? (in TV context)**
   - CPT = Budget ÷ Universe ÷ TVRs × 100,000
   - Example: £600,000 ÷ 48,000,000 ÷ 200 TVRs × 100,000 = £6.25

## Requirements:
- Interactive calculator tool for CPT
- Input fields for:
  - Total Campaign Cost (with dollar sign indicator)
  - Total Impressions
- Calculate button (primary action, blue)
- Reset button (secondary action, gray)
- Clear display of calculated CPT result
- Educational section explaining:
  - What is CPT?
  - The Formula
- Dark theme design matching the reference UI
- Professional appearance suitable for demos and training
