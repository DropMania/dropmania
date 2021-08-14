import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://ipcvsdfreyisgwvswuvz.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODQ0OTM0MCwiZXhwIjoxOTQ0MDI1MzQwfQ.bXlemC_4KiO1hihLPuE9cf-uxba3oqjcSBdzoeK_15Y'
)
