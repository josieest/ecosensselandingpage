export type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassValue[]
  | Record<string, boolean | undefined | null>;

function clsx(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  
  for (const input of inputs) {
    if (!input) continue;
    
    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      const result = clsx(...input);
      if (result) classes.push(result);
    } else if (typeof input === 'object') {
      for (const key in input) {
        if (input[key]) classes.push(key);
      }
    }
  }
  
  return classes.join(' ');
}

function twMerge(...classLists: string[]): string {
  const classList = classLists.join(' ').split(' ').filter(Boolean);
  const uniqueClasses = new Map<string, string>();
  
  for (const cls of classList) {
    const key = cls.split('-')[0] || cls;
    uniqueClasses.set(key, cls);
  }
  
  return Array.from(uniqueClasses.values()).join(' ');
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

// Lightweight CVA (Class Variance Authority) implementation
type ConfigSchema = Record<string, Record<string, ClassValue>>;
type ConfigVariants<T extends ConfigSchema> = {
  [Variant in keyof T]?: keyof T[Variant] | null | undefined;
};
type Config<T extends ConfigSchema> = {
  variants?: T;
  defaultVariants?: ConfigVariants<T>;
};

export type VariantProps<Component extends (...args: any) => any> =
  Parameters<Component>[0];

export function cva<T extends ConfigSchema>(
  base?: ClassValue,
  config?: Config<T>
) {
  return (props?: ConfigVariants<T> & { className?: ClassValue }) => {
    if (!config?.variants) {
      return cn(base, props?.className);
    }

    const variantClasses: ClassValue[] = [base];

    Object.keys(config.variants).forEach((variant) => {
      const variantKey = variant as keyof T;
      const variantValue =
        props?.[variantKey] ?? config.defaultVariants?.[variantKey];

      if (variantValue) {
        variantClasses.push(config.variants![variantKey][variantValue as keyof T[typeof variantKey]]);
      }
    });

    if (props?.className) {
      variantClasses.push(props.className);
    }

    return cn(...variantClasses);
  };
}