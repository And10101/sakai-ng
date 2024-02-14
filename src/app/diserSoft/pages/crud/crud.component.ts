import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/demo/service/product.service';

import { TranslateService } from '@ngx-translate/core';
import { SearchFilter } from 'DTO/search-filter.dto';
import { NewTableEventsDTO, TableEventsDTO } from 'DTO/table-events.dto';
import { CompaniesModel } from 'models/components/admin/companies.model';
//import { HeaderTableModel } from 'models/global/header-table.model';
import { GlobalFunctionsService } from '../../service/utils/global_functions.service';
import { CompaniesService } from '../../service/admin/companies.service';
import { Subscription } from 'rxjs';
import { Table } from 'primeng/table';
import { TablePageEvent } from 'primeng/table';
import { ViewChild } from '@angular/core';


@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService]
})
export class CrudComponent implements OnInit {

    @ViewChild('dt')
    dt: Table;
    

    subscription:Subscription = new Subscription();

    ELEMENT_DATA:CompaniesModel[] = [];
    //ELEMENT_HEADERS:HeaderTableModel[]=[];
  
    LENGTH_DATA:number = 10;
    PAGE_SIZE:number = 0;
  
    filterString:SearchFilter[] = [];
  
    defaultTableEvents:TableEventsDTO = {page: 0, size: 10, direction: "", sort: [], filter: "true", columns:[]};

    productDialog: boolean = false;

    editProductDialog:boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    product: Product = {};



    products: Product[] = [];

    selectedProducts: Product[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private productService: ProductService, private messageService: MessageService, 
                private companiesService:CompaniesService, 
                private globalFunctions:GlobalFunctionsService, 
                private translateService:TranslateService) 
    { }

    ngOnInit() {
        this.productService.getProducts().then(data => {
            this.products = data;
            console.log("products",this.products);
        });
        this.TableEvent(this.defaultTableEvents);

        this.cols = [
            {header: "1", field: 'tenantId'},
            {header: "2", field: 'identifier'},
            {header: "3", field: 'name'},
            {header: "4", field: 'description'},
            {header: "5", field: 'dbName'},
            {header: "6", field: 'csAppId'},
            {header: "7", field: 'csTenantId'}
        ];

        // this.cols = [
        //     { field: 'product', header: 'Product' },
        //     { field: 'price', header: 'Price' },
        //     { field: 'category', header: 'Category' },
        //     { field: 'rating', header: 'Reviews' },
        //     { field: 'inventoryStatus', header: 'Status' }
        // ];

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }

    TableEvent(event:any){
        var eventObject:NewTableEventsDTO = new NewTableEventsDTO();
        if(event.first != null && event.rows != null){
            eventObject.direction = event.direction;
            eventObject.page = ((event.first / event.rows));
            eventObject.size = event.rows;
            eventObject.sort = [];
            eventObject.filters = this.filterString;
        }
        else
        {
           eventObject = event;
        }
        
        this.companiesService.getAllCompanies(eventObject).subscribe({
            next: (value)=>{
                if(value){
                    this.ELEMENT_DATA = value.data;
                    //this.LENGTH_DATA = .length_data;
                    this.PAGE_SIZE = value.pageSize;
                    console.log("Valor",value);
                }else{
                    console.warn("Error");
                }
            }
        });
    }


    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editProduct(product: Product) {
        this.product = { ...product };
        this.editProductDialog = true;
    }

    deleteProduct(product: Product) {
        this.deleteProductDialog = true;
        this.product = { ...product };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.products = this.products.filter(val => val.id !== this.product.id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        this.product = {};
    }

    hideDialog() {
        this.productDialog = false;
        this.editProductDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name?.trim()) {
            if (this.product.id) {
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.product.id = this.createId();
                this.product.code = this.createId();
                this.product.image = 'product-placeholder.svg';
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
