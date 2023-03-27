export type WebpOptions = {
  effort: number;
  mode: 'lossless' | 'lossly';
  quality: number;
};

export type Options = {
  image: {
    embed_size: number;
    srcset_min_width: number;
    compress: boolean;
    jpeg: {
      options: {
        quality: number;
        mozjpeg: boolean;
      };
    };
    png: {
      options: {
        compressionLevel: number;
      };
    };
    webp: {
      options_lossless: WebpOptions;
      options_lossly: WebpOptions;
    };
  };
};

export type CLIOptions = {
  include?: string;
  exclude?: string;
  nowrite?: boolean;
  fast?: boolean;
  fail?: boolean;
  xoptim?: string[];
  onlyoptim?: boolean;
  onlycomp?: boolean;
  cleanache?: boolean;
  nocache?: boolean;
};

const default_options: Options = {
  image: {
    embed_size: 1500,
    srcset_min_width: 640,
    compress: true,
    jpeg: {
      options: {
        quality: 75,
        mozjpeg: true,
      },
    },
    png: {
      options: {
        compressionLevel: 9,
      },
    },
    webp: {
      options_lossless: {
        effort: 4,
        quality: 77,
        mode: 'lossless',
      },
      options_lossly: {
        effort: 4,
        quality: 77,
        mode: 'lossly',
      },
    },
  },
};

const fast_options_override: {} = {
  image: {
    embed_size: 0,
    srcset_min_width: 16000,
    compress: false,
    jpeg: {
      options: {
        mozjpeg: false,
      },
    },
    png: {
      options: {
        compressionLevel: 0,
      },
    },
    webp: {
      options_lossless: {
        effort: 0,
      },
      options_lossly: {
        effort: 0,
      },
    },
  },
};

export function fast() {
  Object.assign(default_options, fast_options_override);
}

export default default_options;
