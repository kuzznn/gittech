import { IPCPart } from '@interfaces/PCPart';
import { PC_PART_TYPES } from '@enums/PCPartType';

const pcPartData: IPCPart[] = [
  {
    id: 1,
    name: 'Cpu Intel Pentium G7400 Box',
    price: 20900000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22364_cpu_intel_pentium_g7400_box.jpg',
    type: PC_PART_TYPES.CPU,
  },
  {
    id: 2,
    name: 'CPU AMD Ryzen 7 5700X (3.4Ghz boost 4.6Ghz, 32Mb, 8 Core, 16 Threads, 65W)',
    price: 7600000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22172_cpu_amd_ryzen_7_5700x.jpg',
    type: PC_PART_TYPES.CPU,
  },
  {
    id: 3,
    name: 'CPU AMD Ryzen 5 5600 (3.5Ghz boost 4.4Ghz, 32Mb, 6 Core, 12 Threads, 65W)',
    price: 3700000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22170_cpu_amd_ryzen_5_5500.jpg',
    type: PC_PART_TYPES.CPU,
  },
  {
    id: 4,
    name: 'Cpu Intel Core i9-12900F Box',
    price: 12950000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22166_cpu_intel_core_i9_12900f_box.jpg',
    type: PC_PART_TYPES.CPU,
  },
  {
    id: 5,
    name: 'Cpu Intel Core i9-12900KS Box',
    price: 19890000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22166_cpu_intel_core_i9_12900f_box.jpg',
    type: PC_PART_TYPES.CPU,
  },
  {
    id: 7,
    name: 'Mainboard Gigabyte B660I AORUS PRO DDR4',
    price: 5690000,
    thumbnail:
      'https://mega.com.vn/media/product/22642_mainboard_gigabyte_b660i_aorus_pro_ddr4.jpg',
    type: PC_PART_TYPES.MAINBOARD,
  },
  {
    id: 8,
    name: 'Mainboard MSI A320M A PRO (AMD)',
    price: 1370000,
    thumbnail:
      'https://mega.com.vn/media/product/22665_mainboard_msi_a320m_a_pro_amd_10.jpg',
    type: PC_PART_TYPES.MAINBOARD,
  },
  {
    id: 9,
    name: 'Mainboard MSI A320M A PRO (AMD)',
    price: 1370000,
    thumbnail:
      'https://mega.com.vn/media/product/22665_mainboard_msi_a320m_a_pro_amd_10.jpg',
    type: PC_PART_TYPES.MAINBOARD,
  },

  {
    id: 10,
    name: 'Ram 8gb/3200 PC Kingmax DDR4    ',
    price: 890000,
    thumbnail:
      'https://mega.com.vn/media/product/22580_ram_8gb3200_pc_kingmax_ddr4.jpg',
    type: PC_PART_TYPES.RAM,
  },
  {
    id: 11,
    name: 'Ram 32gb/3600 (16gbx2) PC Gskill Trident Z RGB (F4-3600C18D-32GTZR)',
    price: 4390000,
    thumbnail:
      'https://mega.com.vn/media/product/22473_ram_32gb3600_16gbx2_pc_gskill_trident_z_rgb_f4_3600c18d_32gtzr.jpg',
    type: PC_PART_TYPES.RAM,
  },
  {
    id: 12,
    name: 'Ram 8gb/3000 PC Corsair DDR4 Vengeance LPX CMK8GX4M1D3000C16',
    price: 895000,
    thumbnail: 'https://mega.com.vn/media/product/22447_',
    type: PC_PART_TYPES.RAM,
  },
  {
    id: 13,
    name: 'HDD Box Seagate 2TB Expansion Portable 2.5" USB 3.0 STKM2000400',
    price: 2400000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22419_hdd_box_seagate_2tb_expansion_portable_2_5.jpg',
    type: PC_PART_TYPES.HDD,
  },
  {
    id: 14,
    name: 'HDD WD Red Plus 4TB 3.5 inch, SATA 3, 128MB Cache, 5400RPM (WD40EFZX)',
    price: 2850000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22408_hdd_wd_red_plus_4tb_3_5_inch_sata_3_128mb_cache_5400rpm_wd40efzx.jpg',
    type: PC_PART_TYPES.HDD,
  },
  {
    id: 15,
    name: 'HDD PC 10TB 256GB WD - PURPLE ( Màu Tím - chuyên cho camera',
    price: 7850000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22290_hdd_pc_10tb_256gb_wd_purple.jpg',
    type: PC_PART_TYPES.HDD,
  },
  {
    id: 16,
    name: 'SSD Intel 670p Series 2TB M.2 PCIe 3.0 x4 (SSDPEKNU020TZX199A39R)',
    price: 5550000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22643_ssd_intel_670p_series_2tb_m_2_pcie_3_0_x4_ssdpeknu020tzx199a39r.jpg',
    type: PC_PART_TYPES.SSD,
  },
  {
    id: 17,
    name: 'Ổ cứng SSD Lexar 240GB Sata III 2.5 (LNQ100X240G-RNNNG)',
    price: 745000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22585_o_cung_ssd_lexar_240gb_sata_iii_2_5_lnq100x240g_rnnng.jpg',
    type: PC_PART_TYPES.SSD,
  },
  {
    id: 18,
    name: 'Ổ cứng SSD WD Green 1TB SATA III (6Gbit/s) 2.5 inch, 7mm (WDS100T3G0A)',
    price: 2690000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22152_o_cung_ssd_wd_green_1tb_sata_iii_6gbits_2_5_inch_7mm_wds100t3g0a_10.jpg',
    type: PC_PART_TYPES.SSD,
  },
  {
    id: 19,
    name: 'Vga Gigabyte GeForce RTX 3070 Ti VISION OC 8G (GV-N307TVISION OC-8GD)',
    price: 20350000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22679_vga_gigabyte_geforce_rtx_3070_ti_vision_oc_8g_gv_n307tvision_oc_8gd.jpg',
    type: PC_PART_TYPES.GPU,
  },
  {
    id: 20,
    name: 'Vga Asus DUAL RTX 3070 O8G V2',
    price: 17450000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22647_vga_asus_dual_rtx_3070_o8g_v2.jpg',
    type: PC_PART_TYPES.GPU,
  },
  {
    id: 21,
    name: 'Vga Gigabyte Aorus GeForce RTX 3070 Ti MASTER 8G (GV-N307TAORUS M-8GD)',
    price: 22390000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22596_vga_gigabyte_aorus_geforce_rtx_3070_ti_master_8g_gv_n307taorus_m_8gd.jpg',
    type: PC_PART_TYPES.GPU,
  },
  {
    id: 22,
    name: 'Nguồn máy tính MIK S-Power 500W ATX 12V 2.3A',
    price: 580000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22598_nguon_may_tinh_mik_s_power_500w_atx_12v_2_3a_4.jpg',
    type: PC_PART_TYPES.PSU,
  },
  {
    id: 23,
    name: 'Nguồn máy tính MIK S-Power 400W ATX 12V 2.3A',
    price: 480000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22597_nguon_may_tinh_mik_s_power_400w_atx_12v_2_3a.jpg',
    type: PC_PART_TYPES.PSU,
  },
  {
    id: 24,
    name: 'Nguồn Máy Tính Viva SilverStone 550W 80 Plus Bronze ( SST-VA550-B )',
    price: 990000,
    thumbnail: 'https://mega.com.vn/media/product/120_22478_',
    type: PC_PART_TYPES.PSU,
  },
  {
    id: 25,
    name: 'Case Vitra Poseidon R15 Black (Kèm 3 fan RGB)',
    price: 735000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22696_case_vitra_poseidon_r15_black_kem_3_fan_rgb.jpg',
    type: PC_PART_TYPES.CASE,
  },
  {
    id: 26,
    name: 'Case Cooler Master MasterBox NR200P ITX TG',
    price: 1990000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22641_case_cooler_master_masterbox_nr200p_itx_tg_6.jpg',
    type: PC_PART_TYPES.CASE,
  },
  {
    id: 27,
    name: 'Case Vitra Phantom A8 White (Kèm 3 Fan RGB)',
    price: 790000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22640_case_vitra_phantom_a8_white_kem_3_fan_rgb.jpg',
    type: PC_PART_TYPES.CASE,
  },
  {
    id: 28,
    name: 'LCD Asus ROG Strix XG349C 34 inch UWQHD IPS (3440x1440) 180Hz, 1ms GTG, Cong',
    price: 24250000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22705_lcd_asus_rog_strix_xg349c_34_inch_uwqhd_ips_3440x1440_180hz_1ms_gtg_cong.jpg',
    type: PC_PART_TYPES.MONITOR,
  },
  {
    id: 29,
    name: 'LCD Asus TUF Gaming VG34VQL1B 34 inch WQHD VA 165Hz Cong',
    price: 15150000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22704_lcd_asus_tuf_gaming_vg34vql1b_34_inch_wqhd_va_165hz_cong_sdg.jpg',
    type: PC_PART_TYPES.MONITOR,
  },
  {
    id: 30,
    name: 'LCD Asus TUF Gaming VG27WQ1B 27 inch WQHD (2560×1440) VA 165Hz, 1ms, Cong',
    price: 7490000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22702_lcd_asus_tuf_gaming_vg27wq1b.jpg',
    type: PC_PART_TYPES.MONITOR,
  },
  {
    id: 31,
    name: 'Chuột Gaming có dây Fuhlen G95',
    price: 595000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22662_chuot_gaming_co_day_fuhlen_g95.jpg',
    type: PC_PART_TYPES.MOUSE,
  },
  {
    id: 32,
    name: 'Chuột máy tính có dây AJAZZ AJ52 Black',
    price: 250000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22637_chuot_may_tinh_co_day_ajazz_aj52_black.jpg',
    type: PC_PART_TYPES.MOUSE,
  },
  {
    id: 33,
    name: 'Chuột có dây Gaming DAREU EM908 (Trắng)',
    price: 370000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22613_chuot_co_day_gaming_dareu_em908_trang.jpg',
    type: PC_PART_TYPES.MOUSE,
  },
  {
    id: 34,
    name: 'Bàn phím cơ E-Dra EK3104 V2 Red switch',
    price: 790000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22714_ban_phim_co_e_dra_ek3104_v2_red_switch.jpg',
    type: PC_PART_TYPES.KEYBOARD,
  },
  {
    id: 35,
    name: 'Bàn phím cơ AKKO 3096 DS Midnight (Cherry Red switch)',
    price: 1790000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22652_b__n_ph__m_c___akko_3096_ds_midnight.jpg',
    type: PC_PART_TYPES.KEYBOARD,
  },
  {
    id: 36,
    name: 'Bàn phím cơ không dây Keychron K7 A1 Nhựa White Led Gateron Red Switch',
    price: 1890000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22635_ban_phim_co_khong_day_keychron_k7_a1_nhua_white_led_gateron_red_switch.jpg',
    type: PC_PART_TYPES.KEYBOARD,
  },
  {
    id: 37,
    name: 'Tai nghe Razer Barracuda X-2022 (RZ04-04430100-R3M1)',
    price: 3590000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22610_tai_nghe_razer_barracuda_x_2022_rz04_04430100_r3m1.jpg',
    type: PC_PART_TYPES.HEADSET,
  },
  {
    id: 38,
    name: 'Tai nghe Asus ROG Cetra II USB-C',
    price: 2290000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22608_tai_nghe_asus_rog_cetra_ii_usb_c.jpg',
    type: PC_PART_TYPES.HEADSET,
  },
  {
    id: 39,
    name: 'Tai nghe Razer Kraken V3 X USB (RZ04-03750100-R3M1)',
    price: 1795000,
    thumbnail:
      'https://mega.com.vn/media/product/120_22602_tai_nghe_razer_kraken_v3_x_usb_rz04_03750100_r3m1.jpg',
    type: PC_PART_TYPES.HEADSET,
  },
];

export { pcPartData };
